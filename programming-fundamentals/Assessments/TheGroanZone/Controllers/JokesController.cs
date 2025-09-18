using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using TheGroanZone.Models;
using TheGroanZone.ViewModels;

namespace TheGroanZone.Controllers;

[Route("jokes")]
public class JokesController : Controller
{
    private readonly ApplicationContext _context;
    private const string SessionUserId = "userId";

    public JokesController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> JokesIndex()
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to SignIn if user is not signed in
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        // Displays all Jokes in a list
        var vm = new JokesIndexViewModel
        {
            Jokes = await _context
                .Jokes.AsNoTracking()
                .Include(j => j.Ratings)
                .Include(j => j.User)
                .OrderByDescending(j => j.CreatedAt) // Show newest first
                .Select(j => new JokesRowViewModel
                {
                    Id = j.Id,
                    Setup = j.Setup,
                    Punchline = j.Punchline,
                    AverageRating =
                        j.Ratings != null && j.Ratings.Count != 0
                            ? j.Ratings.Average(r => r.UserRating)
                            : 0.0,
                    UploadedBy = j.User!.UserName,
                    UploaderId = j.UserId,
                    CreateDate = j.CreatedAt.ToString("MMMM dd, yyyy"),
                })
                .ToListAsync(),
        };
        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult NewJokesForm()
    {
        var vm = new JokeFormViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateJoke(JokeFormViewModel vm)
    {
        // normalizing input
        vm.Setup = (vm.Setup ?? "").Trim();
        vm.Punchline = (vm.Punchline ?? "").Trim();

        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(NewJokesForm), vm);
        }

        var joke = new Joke
        {
            Setup = vm.Setup,
            UserId = userId.Value,
            Punchline = vm.Punchline,
        };

        await _context.Jokes.AddAsync(joke);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(JokeDetails), new { id = joke.Id });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> JokeDetails(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var maybeJoke = await _context
            .Jokes.AsNoTracking()
            .Include(j => j.User)
            .Include(j => j.Ratings)
            .ThenInclude(r => r.User)
            .FirstOrDefaultAsync(j => j.Id == id);

        if (maybeJoke is null)
        {
            return NotFound("No Joke Found.");
        }

        var vm = new JokeFormViewModel
        {
            Id = maybeJoke.Id,
            UserId = maybeJoke.UserId,
            Setup = maybeJoke.Setup,
            Punchline = maybeJoke.Punchline,
            RatingsCount = maybeJoke.Ratings.Count,
            AverageRating =
                maybeJoke.Ratings.Count != 0 ? maybeJoke.Ratings.Average(r => r.UserRating) : 0.0,
            Raters = [.. maybeJoke.Ratings.Select((r) => r.User!.UserName)],
            UploadedBy = maybeJoke.User?.UserName ?? string.Empty,
            RatingFormViewModel = new() { JokeId = maybeJoke.Id },
        };

        return View(vm);
    }

    [HttpGet("{id}/edit")]
    public async Task<IActionResult> EditJoke(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        var maybeJoke = await _context.Jokes.FirstOrDefaultAsync(j => j.Id == id);
        if (maybeJoke is null)
        {
            return NotFound("No Joke was Found.");
        }

        // check if User matches joke.UserId

        var vm = new JokeFormViewModel
        {
            Id = maybeJoke.Id,
            Setup = maybeJoke.Setup,
            Punchline = maybeJoke.Punchline,
        };

        // return View(vm);
        return View(vm);
    }

    [HttpPost("{id}/edit/process")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditProcess(int id, JokeFormViewModel vm)
    {
        // normalizing input
        vm.Setup = (vm.Setup ?? "").Trim();
        vm.Punchline = (vm.Punchline ?? "").Trim();

        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(EditJoke), vm);
        }

        // check if User matches joke.UserId

        var maybeJoke = await _context.Jokes.FirstOrDefaultAsync(j => j.Id == id);
        if (maybeJoke is null)
        {
            return NotFound("No Joke was Found.");
        }

        maybeJoke.Setup = vm.Setup;
        maybeJoke.Punchline = vm.Punchline;

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(JokeDetails), new { id });
    }

    [HttpPost("{id}/rate")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> RateJoke(int id, RatingFormViewModel vm)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }
        if (!ModelState.IsValid)
        {
            var joke = await _context
                .Jokes.AsNoTracking()
                .Where(j => j.Id == id)
                .Select(j => new JokeFormViewModel
                {
                    Id = j.Id,
                    UserId = j.UserId,
                    Setup = j.Setup,
                    Punchline = j.Punchline,
                    RatingsCount = j.Ratings.Count,
                    AverageRating =
                        j.Ratings.Count != 0 ? j.Ratings.Average(r => r.UserRating) : 0.0,
                    Raters = j
                        .Ratings.Where(r => r.User != null)
                        .Select(r => r.User != null ? r.User.UserName : string.Empty)
                        .ToList(),
                    RatingFormViewModel = new RatingFormViewModel { JokeId = j.Id },
                })
                .FirstOrDefaultAsync();
            if (joke is null)
            {
                return NotFound("Joke not found.");
            }

            return View("JokeDetails", joke);
        }

        // Checking if the user has already rated this movie
        var alreadyRated = _context.Ratings.Any(r => r.JokeId == id && r.UserId == uid);

        if (!alreadyRated)
        {
            var newRating = new Rating
            {
                UserId = uid,
                JokeId = id,
                UserRating = vm.UserRating,
            };

            await _context.Ratings.AddAsync(newRating);
            await _context.SaveChangesAsync();
        }
        else
        {
            TempData["RateMessage"] = "You've already rated this joke.";
            return RedirectToAction(nameof(JokeDetails), new { id });
        }

        return RedirectToAction(nameof(JokeDetails), new { id });
    }

    [HttpGet("{id}/delete")]
    public async Task<IActionResult> ConfirmDelete(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Sign In if user is not signed in
        if (userId is null)
        {
            return RedirectToAction("LoginForm", "Account", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return NotFound("No Joke was Found.");
        }

        // check if User matches movie.UserId

        var maybeJoke = await _context.Jokes.FirstOrDefaultAsync(j => j.Id == id);
        if (maybeJoke is null)
        {
            return NotFound("No Joke was Found.");
        }

        var vm = new ConfirmDeleteViewModel { Id = maybeJoke.Id, Setup = maybeJoke.Setup };
        return View("ConfirmDelete", vm);
    }

    [HttpPost("{id}/destroy")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteJoke(int id, ConfirmDeleteViewModel vm)
    {
        // double-check the id in the route vs. the vm Id
        if (id != vm.Id)
        {
            return BadRequest();
        }

        // try to find Movie
        var maybeJoke = _context.Jokes.FirstOrDefault(j => j.Id == id);
        if (maybeJoke is null)
        {
            return NotFound("No Joke was Found.");
        }

        _context.Jokes.Remove(maybeJoke);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(JokesIndex));
    }
}
