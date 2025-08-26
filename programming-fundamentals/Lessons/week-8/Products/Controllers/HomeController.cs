using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Products.Models;

namespace Products.Controllers;

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

    [HttpGet("about")]
    public IActionResult ShowAboutPage()
    {
        return View("AboutUs"); // explicit naming of view
    }

    [HttpGet("show-interpolation-data")]
    public IActionResult ShowInterpolationData()
    {
        return View(); // Looks for Views/Home/ShowInterpolationData.cshtml
    }

    [HttpGet("number-comparison")]
    public IActionResult NumberComparison()
    {
        return View(); // Looks for Views/Home/NumberComparison.cshtml
    }

    [HttpGet("user-role")]
    public IActionResult UserRole()
    {
        return View(); // Looks for Views/Home/UserRole.cshtml
    }

    [HttpGet("show-foreach-loop")]
    public IActionResult ShowForeachLoop()
    {
        return View();
    }

    [HttpGet("loops")]
    public IActionResult Loops()
    {
        return View();
    }
}
