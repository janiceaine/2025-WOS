using System.Diagnostics;
using System.Text.Json;
using CineMini.Models;
using Microsoft.AspNetCore.Mvc;

namespace CineMini.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly string movieFile = "Data/movies.json";

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    private List<Movie> GetMovies()
    {
        var json = System.IO.File.ReadAllText(movieFile);
        var movies = JsonSerializer.Deserialize<List<Movie>>(json);
        return movies ?? [];
    }

    [HttpGet("movies")]
    public IActionResult Movies()
    {
        var movies = GetMovies();

        ViewBag.TheMovies = movies;
        ViewBag.MovieCount = movies.Count;

        return View(movies);
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("privacy")]
    public IActionResult Privacy()
    {
        return View();
    }

    [HttpGet("details/{id}")]
    public IActionResult Details(int id)
    {
        var movie = GetMovies().Find(m => m.Id == id);
        if (movie == null)
            return NotFound();
        return View(movie);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(
            new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier }
        );
    }
}
