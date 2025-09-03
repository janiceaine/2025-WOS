using System.Diagnostics;
using System.Text.Json;
using AspNetCoreGeneratedDocument;
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
        var json = System.IO.File.ReadAllText(movieFile); // Reading movies.json file as text
        var movies = JsonSerializer.Deserialize<List<Movie>>(json); //converting the json text into a list of movie objects
        return movies ?? []; //returning the movies list or empty object
    }

    [HttpGet("movies")]
    public IActionResult Movies(string? Genre)
    {
        var movies = GetMovies();

        var filterMovies = movies.Where(m => m.Genre == Genre).ToList(); // movies with specified Genre

        ViewBag.TheMovies = movies; //movies stored in the ViewBag
        ViewBag.Genre = Genre;
        ViewBag.MovieCount = Genre == null ? movies.Count : filterMovies.Count;

        return View(Genre == null ? movies : filterMovies);
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
        var movie = GetMovies().Find(m => m.Id == id); //finding movie by given id
        if (movie == null)
            return NotFound(); //returns a 404 if movie is not found
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
