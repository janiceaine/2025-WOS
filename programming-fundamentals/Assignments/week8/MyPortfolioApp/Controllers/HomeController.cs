using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyPortfolioApp.Models;

namespace MyPortfolioApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        ViewBag.IsFeatured = true;
        return View();
    }

    [HttpGet("privacy")]
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(
            new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier }
        );
    }

    [HttpGet("bio")]
    public IActionResult Bio()
    {
        return View();
    }

    [HttpGet("about")]
    public IActionResult About()
    {
        return View();
    }

    [HttpGet("contact")]
    public IActionResult Contact()
    {
        return View();
    }

    [HttpGet("blog")]
    public IActionResult Blog()
    {
        var titles = new List<string> { "My First Post", "Learning C#", "More Projects" };
        ViewData["Titles"] = titles;
        return View();
    }

    [HttpGet("blog/post1")]
    public IActionResult BlogPost1()
    {
        return View();
    }

    [HttpGet("blog/post2")]
    public IActionResult BlogPost2()
    {
        return View();
    }

    [HttpGet("blog/post3")]
    public IActionResult BlogPost3()
    {
        return View();
    }
}
