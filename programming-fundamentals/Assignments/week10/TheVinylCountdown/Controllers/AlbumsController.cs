using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using TheVinylCountdown.Models;
using TheVinylCountdown.ViewModels;

namespace TheVinylCountdown.Controllers;

[Route("albums")]
public class AlbumsController : Controller
{
    private readonly ApplicationContext _context;
    private const string SessionUserId = "userId";

    public AlbumsController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult AlbumsIndex()
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Login if user is not logged in
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Vinyl", new { message = "not-authenticated" });
        }

        // Displays all Albums in a list
        var vm = new AlbumsIndexViewModel
        {
            Albums = _context
                .Albums.AsNoTracking()
                .OrderByDescending(a => a.CreatedAt) // Show newest first
                .Select(a => new AlbumsRowViewModel
                {
                    Id = a.Id,
                    Title = a.Title,
                    Artist = a.Artist,
                    UploadedBy = a.User!.UserName,
                    LikeCount = a.Likes.Count,
                    LikedByMe = a.Likes.Any((like) => like.UserId == uid),
                })
                .ToList(),
        };
        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult NewAlbumsForm()
    {
        var vm = new AlbumFormViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public IActionResult CreateAlbum(AlbumFormViewModel vm)
    {
        // normalizing input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Artist = (vm.Artist ?? "").Trim();

        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Login if user is not logged in
        if (userId is null)
        {
            return RedirectToAction("LoginForm", "Vinyl", new { message = "not-authenticated" });
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(NewAlbumsForm), vm);
        }

        var album = new Album
        {
            Title = vm.Title,
            Artist = vm.Artist,
            UserId = userId.Value,
        };

        _context.Albums.Add(album);
        _context.SaveChanges();
        return RedirectToAction(nameof(NewAlbumsForm));
    }

    [HttpGet("my-albums")]
    public IActionResult MyAlbums()
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Login if user is not logged in
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Vinyl", new { message = "not-authenticated" });
        }

        // Query albums that belong to the logged-in user
        var albums = _context
            .Albums.Where(a => a.UserId == userId)
            .OrderByDescending(a => a.CreatedAt) // Show newest first
            .Select(a => new AlbumsRowViewModel
            {
                Id = a.Id,
                Title = a.Title,
                Artist = a.Artist,
                UploadedBy = a.User!.UserName,
                LikeCount = a.Likes.Count,
                LikedByMe = a.Likes.Any((like) => like.UserId == uid),
            })
            .ToList();

        // Returning a filtered view of AlbumsIndex
        return View("AlbumsIndex", new AlbumsIndexViewModel { Albums = albums });
    }

    [HttpPost("{id}/like")]
    [ValidateAntiForgeryToken]
    public IActionResult Like(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Login if user is not logged in
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Vinyl", new { message = "not-authenticated" });
        }

        // check if user already liked this post
        var alreadyLiked = _context.Likes.Any(like => like.UserId == uid && like.AlbumId == id);
        if (!alreadyLiked)
        {
            var newLike = new Like { UserId = uid, AlbumId = id };
            _context.Likes.Add(newLike);
            _context.SaveChanges();
        }
        // This sends the user back to where they came from(the same page they are on)
        return Redirect(Request.Headers["Referer"].ToString());
        // return RedirectToAction("AlbumsIndex");
    }

    [HttpPost("{id}/unlike")]
    [ValidateAntiForgeryToken]
    public IActionResult Unlike(int id)
    {
        // getting current user's id fron session
        var userId = HttpContext.Session.GetInt32(SessionUserId);
        // Redirect to Login if user is not logged in
        if (userId is not int uid)
        {
            return RedirectToAction("LoginForm", "Vinyl", new { message = "not-authenticated" });
        }

        // Find specific like to remove
        var likeToRemove = _context.Likes.FirstOrDefault((l) => l.UserId == uid && l.AlbumId == id);

        if (likeToRemove is not null)
        {
            _context.Likes.Remove(likeToRemove);
            _context.SaveChanges();
        }
        // This sends the user back to where they came from(the same page they are on)
        return Redirect(Request.Headers["Referer"].ToString());
        // return RedirectToAction("AlbumsIndex");
    }
}
