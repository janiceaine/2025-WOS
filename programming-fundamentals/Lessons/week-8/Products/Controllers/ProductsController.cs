using Microsoft.AspNetCore.Mvc;

namespace Products.Controllers;

public class ProductsController : Controller
{
    [HttpGet("products")]
    public IActionResult Index()
    {
        return View();
    }
}
