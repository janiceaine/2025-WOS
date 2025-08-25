using Microsoft.AspNetCore.Mvc;

namespace RouteWrangler.Controllers;

public class RouteController : Controller
{
    [HttpGet("welcome")]
    public IActionResult Welcome()
    {
        return Content("Welcome to the Explorer Service!");
    }

    [HttpGet("items/{itemId}")]
    public IActionResult Items(int itemId)
    {
        return Content($"Viewing item with ID: {itemId}");
    }

    [HttpGet("calculate/{operation}/{num1}/{num2}")]
    public IActionResult Calculate(string? operation, int num1, int num2)
    {
        int added = 0;
        if (operation == "add")
        {
            added = num1 + num2;
        }
        return Content($"Performing {operation} on {num1} and {num2} gives us: {added}");
    }

    [HttpGet("profile/{username}/details/{detailType}")]
    public IActionResult Profile(string? username, string? detailType)
    {
        return Content($"Fetching {detailType} for user: {username}.");
    }

    [HttpGet("repeat/{word}/times/{num}")]
    public IActionResult Repeat(string word, int num)
    {
        string result = "";
        for (int i = 0; i <= num; i++)
        {
            result += word;
        }
        return Content($"Output: \"{result}\"");
    }

    [HttpGet("products/filter")]
    public IActionResult FilterProducts(string? category, decimal? maxPrice)
    {
        string response = "Filtering Products";
        if (!string.IsNullOrEmpty(category))
        {
            response += $" by category: '{category}'";
        }
        if (maxPrice.HasValue)
        {
            response += $" with maximum price: '{maxPrice.Value:C}'";
        }
        if (string.IsNullOrEmpty(category) && !maxPrice.HasValue)
        {
            response = "No filter criteria provided. Showing all products.";
        }
        return Content(response);
    }

    [HttpGet("list/sort")]
    public IActionResult SortList(string? orderBy, string? direction)
    {
        string response = "Sorting list by ";
        if (!string.IsNullOrEmpty(orderBy))
        {
            response += $"{orderBy} in ";
        }
        if (!string.IsNullOrEmpty(direction))
        {
            response += $"{direction} order.";
        }
        if (string.IsNullOrEmpty(orderBy) && string.IsNullOrEmpty(direction))
        {
            response = $"Sorting list by default order in default direction.";
        }
        return Content(response);
    }
}

// collaborated with Janis
