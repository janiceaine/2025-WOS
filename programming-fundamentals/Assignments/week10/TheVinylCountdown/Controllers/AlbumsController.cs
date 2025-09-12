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
        if (userId is null)
        {
            return RedirectToAction("LoginForm", "Vinyl", new { message = "not-authenticated" });
        }

        // Query albums that belong to the logged-in user
        var albums = _context
            .Albums.Where(a => a.UserId == userId)
            .OrderByDescending(a => a.CreatedAt) // Show newest first
            .Select(a => new AlbumsRowViewModel
            {
                Title = a.Title,
                Artist = a.Artist,
                UploadedBy = a.User!.UserName,
            })
            .ToList();

        // Returning a filtered view of AlbumsIndex
        return View("AlbumsIndex", new AlbumsIndexViewModel { Albums = albums });
    }
}
