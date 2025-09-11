using BackLogBoss.Models;
using BackLogBoss.ViewModels;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackLogBoss.Controllers;

[Route("games")]
public class GamesController : Controller
{
    private readonly GameContext _context;

    public GamesController(GameContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GamesIndex()
    {
        var vm = new GamesIndexViewModel
        {
            Games = _context
                .Games.AsNoTracking()
                .Select(g => new GamesRowViewModel
                {
                    Id = g.Id,
                    Title = g.Title,
                    Platform = g.Platform,
                    IsComplete = g.IsComplete,
                    Notes = g.Notes,
                })
                .ToList(),
        };
        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult NewGameForm()
    {
        var vm = new GameViewModel();
        return View(vm);
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public IActionResult CreateGame(GameViewModel vm)
    {
        // normalizing input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Platform = (vm.Platform ?? "").Trim();
        vm.Notes = (vm.Notes ?? "").Trim();

        // checking if form is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(NewGameForm), vm);
        }

        var newGame = new Game
        {
            Title = vm.Title,
            Platform = vm.Platform,
            IsComplete = vm.IsComplete,
            Notes = vm.Notes,
        };

        _context.Games.Add(newGame);
        _context.SaveChanges();
        return RedirectToAction(nameof(GamesIndex));
    }

    [HttpGet("{id}")]
    public IActionResult GameDetails(int id)
    {
        var maybeGame = _context.Games.AsNoTracking().FirstOrDefault(g => g.Id == id);
        if (maybeGame is null)
        {
            return NotFound("No Game Found.");
        }

        var vm = new GameViewModel
        {
            Id = maybeGame.Id,
            Title = maybeGame.Title,
            Platform = maybeGame.Platform,
            IsComplete = maybeGame.IsComplete,
            Notes = maybeGame.Notes,
        };

        return View(vm);
    }

    [HttpGet("{id}/edit")]
    public IActionResult EditGame(int id)
    {
        var maybeGame = _context.Games.FirstOrDefault(g => g.Id == id);
        if (maybeGame is null)
        {
            return NotFound("No Game was Found.");
        }

        var vm = new GameViewModel
        {
            Id = maybeGame.Id,
            Title = maybeGame.Title,
            Platform = maybeGame.Platform,
            IsComplete = maybeGame.IsComplete,
            Notes = maybeGame.Notes,
        };

        return View(vm);
    }

    [HttpPost("{id}/update")]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateGame(int id, GameViewModel vm)
    {
        // normalizing input
        vm.Title = (vm.Title ?? "").Trim();
        vm.Platform = (vm.Platform ?? "").Trim();
        vm.Notes = (vm.Notes ?? "").Trim();

        // checking if form is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(EditGame), vm);
        }

        // double-checking the id in the route vs. the vm Id
        if (id != vm.Id)
        {
            return BadRequest();
        }

        // Try to find game
        var maybeGame = _context.Games.FirstOrDefault(g => g.Id == id);
        if (maybeGame == null)
        {
            return NotFound("No Game Found.");
        }

        // When game is found, update its properties from the view model
        maybeGame.Title = vm.Title;
        maybeGame.Platform = vm.Platform;
        maybeGame.IsComplete = vm.IsComplete;
        maybeGame.Notes = vm.Notes;

        _context.SaveChanges();
        return RedirectToAction(nameof(GameDetails), new { id = vm.Id });
    }

    [HttpGet("{id}/delete")]
    public IActionResult ConfirmDelete(int id)
    {
        // try to find game
        var maybeGame = _context.Games.FirstOrDefault(g => g.Id == id);
        if (maybeGame is null)
        {
            return NotFound();
        }

        var vm = new ConfirmDeleteViewModel { Id = maybeGame.Id, Title = maybeGame.Title };
        return View(vm);
    }

    [HttpPost("{id}/destroy")]
    public IActionResult DeleteGame(int id, ConfirmDeleteViewModel vm)
    {
        // double-check the id in the route vs. the vm Id
        if (id != vm.Id)
        {
            return BadRequest();
        }

        // try to find Game
        var maybeGame = _context.Games.FirstOrDefault(g => g.Id == id);
        if (maybeGame is null)
        {
            return NotFound();
        }

        _context.Games.Remove(maybeGame);
        _context.SaveChanges();
        return RedirectToAction(nameof(GamesIndex));
    }
}
