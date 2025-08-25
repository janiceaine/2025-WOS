using Microsoft.AspNetCore.Mvc;

namespace FirstMvc.Controllers;

public class RoutingContoller : Controller
{
    [HttpGet("about")]
    public IActionResult AboutUs()
    {
        return Content("Hello, you are at the about us page!");
    }

    [HttpGet("services")]
    public IActionResult Services()
    {
        var content = "<h1>You are at the services page.<h1>";
        return Content(content, "text/html");
    }

    [HttpGet("products/{id}/{category}")]
    public IActionResult ProductDetails(int id, string category)
    {
        return Content($"Product {id}, Category {category}");
    }

    [HttpGet("contact")]
    public IActionResult Contact(string? message)
    {
        var content = "";
        if (message != null)
        {
            content = $"Helo to you too. {message}";
        }
        else
        {
            content = "You are at the contact page!";
        }
        return Content(content);
    }
}
