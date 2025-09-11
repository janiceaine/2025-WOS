using AuthForge.Models;
using AuthForge.Services;
using AuthForge.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace AuthForge.Controllers;

[Route("account")]
public class AccountController : Controller
{
    private readonly ApplicationContext _context;
    private readonly IPasswordService _passwords;
    private const string SessionUserId = "userId";

    public AccountController(ApplicationContext context, IPasswordService passwords)
    {
        _context = context;
        _passwords = passwords;
    }

    [HttpGet("register")]
    public IActionResult RegisterForm()
    {
        return View(new RegisterFormViewModel());
    }

    [ValidateAntiForgeryToken]
    [HttpPost("register/process")]
    public IActionResult ProcessRegister(RegisterFormViewModel vm)
    {
        // normalize input
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.ConfirmPassword = (vm.ConfirmPassword ?? "").Trim();

        // check if input is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(RegisterForm), vm);
        }

        if (_context.Users.Any((u) => u.Email == vm.Email))
        {
            // Manually adding error to model state
            ModelState.AddModelError("Email", "That Email is in use. Please Login.");
            return View(nameof(RegisterForm), vm);
        }

        // hash the password
        var hashedPassword = _passwords.Hash(vm.Password);

        // create new user
        var newUser = new User { Email = vm.Email, PasswordHash = hashedPassword };

        // add the user to the DataBase
        _context.Users.Add(newUser);
        _context.SaveChanges();

        // lOG User in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        // Redirects to Home or Dashboard
        return RedirectToAction(nameof(ProtectedPage));
    }

    [HttpGet("login")]
    public IActionResult LoginForm(string? error)
    {
        var loginFormViewModel = new LoginFormViewModel { Error = error };
        return View(loginFormViewModel);
    }

    [HttpPost("login")]
    [ValidateAntiForgeryToken]
    public IActionResult ProcessLoginForm(LoginFormViewModel vm)
    {
        // normalize input
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();

        // check if model is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(LoginForm), vm);
        }

        // Find User in DataBase
        if (!_context.Users.Any((u) => u.Email == vm.Email))
        {
            // manually adding error to model state
            ModelState.AddModelError("", "Invalid user Credentials.");
            return View(nameof(LoginForm), vm);
        }

        // email exists, find user
        var maybeUser = _context.Users.FirstOrDefault(u => u.Email == vm.Email);

        if (maybeUser is null)
        {
            return Unauthorized();
        }

        // verify password
        if (!_passwords.Verify(vm.Password, maybeUser.PasswordHash))
        {
            return Unauthorized();
        }

        // log User in
        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);

        // Redirects to Home or Dashboard
        return RedirectToAction(nameof(ProtectedPage));
    }

    [HttpGet("logout")]
    public IActionResult ConfirmLogout()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is null)
        {
            return Unauthorized();
        }
        return View();
    }

    [ValidateAntiForgeryToken]
    [HttpPost("logout/process")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear(); // Clears all session data for the current user

        return RedirectToAction("Index", "Home", new { message = "Logout-successful" });
    }

    [HttpGet("protected")]
    public IActionResult ProtectedPage()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }
        var user = _context.Users.Where((u) => u.Id == uid).FirstOrDefault();
        return View();
    }

    [HttpGet("redirect-to-privacy")]
    public IActionResult RedirectToPrivacy()
    {
        return RedirectToAction(nameof(HomeController.Privacy), "Home");
    }
}
