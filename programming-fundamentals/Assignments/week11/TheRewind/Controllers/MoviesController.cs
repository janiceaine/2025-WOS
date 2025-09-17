using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using TheRewind.Models;
using TheRewind.ViewModels;

namespace TheRewind.Controllers;

[Route("movies")]
public class MoviesController : Controller
{
    private readonly ApplicationContext _context;
    private const string SessionUserId = "userId";

    public MoviesController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> MoviesIndex()
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to SignIn if user is not signed in
        if (userId is not int uid)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }

        // Displays all Movies in a list
        var vm = new MoviesIndexViewModel
        {
            Movies = await _context
                .Movies.AsNoTracking()
                .Include(m => m.Ratings)
                .Include(m => m.User)
                .OrderByDescending(m => m.CreatedAt) // Show newest first
                .Select(m => new MoviesRowViewModel
                {
                    Id = m.Id,
                    Title = m.Title,
                    AverageRating =
                        m.Ratings != null && m.Ratings.Count != 0
                            ? m.Ratings.Average(r => r.UserRating)
                            : 0.0,
                    UploadedBy = m.User!.UserName,
                    UploaderId = m.UserId,
                })
                .ToListAsync(),
        };
        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult NewMoviesForm()
    {
        var vm = new MovieFormViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateMovie(MovieFormViewModel vm)
    {
        // normalizing input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Genre = (vm.Genre ?? "").Trim();

        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(NewMoviesForm), vm);
        }

        var movie = new Movie
        {
            Title = vm.Title,
            Genre = vm.Genre,
            UserId = userId.Value,
            ReleaseDate = vm.ReleaseDate,
            Description = vm.Description,
        };

        await _context.Movies.AddAsync(movie);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(MovieDetails), new { id = movie.Id });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> MovieDetails(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is not int uid)
        {
            return RedirectToAction("SigInForm", "Account", new { message = "not-authenticated" });
        }

        var maybeMovie = await _context
            .Movies.AsNoTracking()
            .Include(m => m.User)
            .Include(m => m.Ratings)
            .ThenInclude(r => r.User)
            .FirstOrDefaultAsync(m => m.Id == id);

        if (maybeMovie is null)
        {
            return NotFound("No Movie Found.");
        }

        var vm = new MovieFormViewModel
        {
            Id = maybeMovie.Id,
            UserId = maybeMovie.UserId,
            Title = maybeMovie.Title,
            Genre = maybeMovie.Genre,
            ReleaseDate = maybeMovie.ReleaseDate,
            Description = maybeMovie.Description,
            RatingsCount = maybeMovie.Ratings.Count,
            AverageRating =
                maybeMovie.Ratings.Count != 0 ? maybeMovie.Ratings.Average(r => r.UserRating) : 0.0,
            Raters = [.. maybeMovie.Ratings.Select((r) => r.User!.UserName)],
            UploadedBy = maybeMovie.User?.UserName ?? string.Empty,
            RatingFormViewModel = new() { MovieId = maybeMovie.Id },
        };

        return View(vm);
    }

    [HttpGet("{id}/edit")]
    public async Task<IActionResult> EditMovie(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }

        var maybeMovie = await _context.Movies.FirstOrDefaultAsync(m => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound("No Movie was Found.");
        }

        // check if User matches movie.UserId

        var vm = new MovieFormViewModel
        {
            Id = maybeMovie.Id,
            Title = maybeMovie.Title,
            Genre = maybeMovie.Genre,
            ReleaseDate = maybeMovie.ReleaseDate,
            Description = maybeMovie.Description,
        };

        return View(vm);
    }

    [HttpPost("{id}/edit/process")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditProcess(int id, MovieFormViewModel vm)
    {
        // normalizing input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Genre = (vm.Genre ?? "").Trim();
        vm.Description = (vm.Description ?? "").Trim();

        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(MovieDetails), vm);
        }

        // check if User matches movie.UserId

        var maybeMovie = await _context.Movies.FirstOrDefaultAsync(m => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound("No Movie was Found.");
        }

        maybeMovie.Title = vm.Title;
        maybeMovie.Genre = vm.Genre;
        maybeMovie.ReleaseDate = vm.ReleaseDate;
        maybeMovie.Description = vm.Description;

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(MovieDetails), maybeMovie);
    }

    [HttpPost("{id}/rate")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> RateMovie(int id, RatingFormViewModel vm)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }
        if (!ModelState.IsValid)
        {
            var movie = await _context
                .Movies.AsNoTracking()
                .Where(m => m.Id == id)
                .Select(m => new MovieFormViewModel
                {
                    Id = m.Id,
                    UserId = m.UserId,
                    Title = m.Title,
                    Genre = m.Genre,
                    ReleaseDate = m.ReleaseDate,
                    Description = m.Description,
                    RatingsCount = m.Ratings.Count,
                    AverageRating =
                        m.Ratings.Count != 0 ? m.Ratings.Average(r => r.UserRating) : 0.0,
                    Raters = m
                        .Ratings.Where(r => r.User != null)
                        .Select(r => r.User != null ? r.User.UserName : string.Empty)
                        .ToList(),
                    RatingFormViewModel = new RatingFormViewModel { MovieId = m.Id },
                })
                .FirstOrDefaultAsync();
            if (movie is null)
            {
                return NotFound("Movie not found.");
            }

            return View("MovieDetails", movie);
        }

        // Checking if the user has already rated this movie
        var alreadyRated = _context.Ratings.Any(r => r.MovieId == id && r.UserId == uid);

        if (!alreadyRated)
        {
            var newRating = new Rating
            {
                UserId = uid,
                MovieId = id,
                UserRating = vm.UserRating,
            };

            await _context.Ratings.AddAsync(newRating);
            await _context.SaveChangesAsync();
        }
        else
        {
            TempData["RateMessage"] = "You've already rated this movie.";
            return RedirectToAction(nameof(MovieDetails), new { id });
        }

        return RedirectToAction(nameof(MovieDetails), new { id });
    }

    [HttpGet("{id}/delete")]
    public async Task<IActionResult> ConfirmDelete(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return NotFound();
        }

        // check if User matches movie.UserId

        var maybeMovie = await _context.Movies.FirstOrDefaultAsync(m => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound("No Movie was Found.");
        }

        var vm = new ConfirmDeleteViewModel { Id = maybeMovie.Id, Title = maybeMovie.Title };
        return View("ConfirmDelete", vm);
    }

    [HttpPost("{id}/destroy")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteMovie(int id, ConfirmDeleteViewModel vm)
    {
        // double-check the id in the route vs. the vm Id
        if (id != vm.Id)
        {
            return BadRequest();
        }

        // try to find Movie
        var maybeMovie = _context.Movies.FirstOrDefault(m => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound();
        }

        _context.Movies.Remove(maybeMovie);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(MoviesIndex));
    }
}
