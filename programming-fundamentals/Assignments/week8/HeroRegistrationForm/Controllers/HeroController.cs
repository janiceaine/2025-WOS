using HeroRegistrationForm.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace HeroRegistrationForm.Controllers;

[Route("heroes")]
public class HeroController : Controller
{
    [HttpGet("register")]
    public IActionResult RegisterForm()
    {
        var vm = new HeroRegistrationViewModel();

        List<string> heroTypes = new List<string> { "Warrior", "Mage", "Rogue" };

        ViewBag.HeroTypes = heroTypes;

        return View("Register");
    }

    [HttpPost("register")]
    [ValidateAntiForgeryToken]
    public IActionResult ProcessHeroRegistration(HeroRegistrationViewModel vm)
    {
        vm.Name = (vm.Name ?? "").Trim();
        vm.HeroType = (vm.HeroType ?? "").Trim();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();

        if (!ModelState.IsValid)
        {
            return View("Register", vm);
        }

        HttpContext.Session.SetString("Name", vm.Name);
        HttpContext.Session.SetString("HeroType", vm.HeroType);

        return RedirectToAction("RegistrationSuccess");
    }

    [HttpGet("registrationsuccess")]
    public IActionResult RegistrationSuccess()
    {
        var Name = HttpContext.Session.GetString("Name") ?? "";
        var HeroType = HttpContext.Session.GetString("HeroType") ?? "";
        ViewBag.Name = Name;
        ViewBag.HeroType = HeroType;

        return View();
    }
}
