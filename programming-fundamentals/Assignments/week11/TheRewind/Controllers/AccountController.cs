using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheRewind.Models;
using TheRewind.Services;
using TheRewind.ViewModels;

namespace TheRewind.Controllers;

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

    [HttpGet("signup")]
    public IActionResult SignUpForm()
    {
        return View(new SignUpFormViewModel());
    }

    [ValidateAntiForgeryToken]
    [HttpPost("signup/process")]
    public async Task<IActionResult> ProcessSignUp(SignUpFormViewModel vm)
    {
        // normalize input
        vm.UserName = (vm.UserName ?? "").Trim();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.ConfirmPassword = (vm.ConfirmPassword ?? "").Trim();

        // check if input is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(SignUpForm), vm);
        }

        if (_context.Users.Any((u) => u.UserName == vm.UserName))
        {
            // Manually adding error to model state
            ModelState.AddModelError("Username", "That UserName already exists.");
            return View(nameof(SignUpForm), vm);
        }

        if (_context.Users.Any((u) => u.Email == vm.Email))
        {
            // Manually adding error to model state
            ModelState.AddModelError("Email", "That Email is in use. Please Login.");
            return View(nameof(SignUpForm), vm);
        }

        // hash the password
        var hashedPassword = _passwords.Hash(vm.Password);

        // create new user
        var newUser = new User
        {
            UserName = vm.UserName,
            Email = vm.Email,
            PasswordHash = hashedPassword,
        };

        // add the user to the DataBase
        await _context.Users.AddAsync(newUser);
        await _context.SaveChangesAsync();

        // log User in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        // Redirects to Home or Dashboard
        return RedirectToAction("MoviesIndex", "Movies");
    }

    [HttpGet("signin")]
    public IActionResult SignInForm(string? error)
    {
        var loginFormViewModel = new SignInFormViewModel { Error = error };
        return View(loginFormViewModel);
    }

    [HttpPost("signin")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> ProcessSignInForm(SignInFormViewModel vm)
    {
        // normalize input
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();

        // check if model is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(SignInForm), vm);
        }

        // Find User in DataBase
        if (!_context.Users.Any((u) => u.Email == vm.Email))
        {
            // manually adding error to model state
            ModelState.AddModelError(
                "",
                "Invalid user Credentials. Please Register and try again."
            );
            return View(nameof(SignInForm), vm);
        }

        // email exists, find user
        var maybeUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == vm.Email);

        if (maybeUser is null)
        {
            // manually adding error to model state
            ModelState.AddModelError("", "Email not found. Please check and try again.");
            return View(nameof(SignInForm), vm);
        }

        // verify password
        if (!_passwords.Verify(vm.Password, maybeUser.PasswordHash))
        {
            // manually adding error to model state
            ModelState.AddModelError("", "Incorrect password. Please try again.");
            return View(nameof(SignInForm), vm);
        }

        // log User in
        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);

        // Redirects to Home or Dashboard
        return RedirectToAction("MoviesIndex", "Movies");
    }

    [HttpGet("signout")]
    public IActionResult ConfirmSignOut()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is null)
        {
            return Unauthorized();
        }
        return View();
    }

    [ValidateAntiForgeryToken]
    [HttpPost("signout/process")]
    public IActionResult Signout()
    {
        HttpContext.Session.Clear(); // Clears all session data for the current user
        // TempData message that will survive the redirect
        TempData["SignoutMessage"] = "You have successfully signed out!";
        return RedirectToAction("Index", "Home");
    }

    [HttpGet("me")]
    public async Task<IActionResult> Profile()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "not-authenticated" });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == uid);
        if (user == null)
        {
            return RedirectToAction("SignInForm", "Account", new { message = "user-not-found" });
        }

        var vm = new UserMovieStatsViewModel
        {
            UserId = user.Id,
            UserName = user.UserName,
            Email = user.Email,
            MovieCount = _context.Movies.Count(m => m.UserId == user.Id),
            MoviesRated = _context.Ratings.Count(r => r.UserId == user.Id),
        };

        return View(vm);
    }

    [HttpGet("redirect-to-privacy")]
    public IActionResult RedirectToPrivacy()
    {
        return RedirectToAction(nameof(HomeController.Privacy), "Home");
    }
}
