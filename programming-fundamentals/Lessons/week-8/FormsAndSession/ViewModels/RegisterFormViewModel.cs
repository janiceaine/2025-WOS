using System.ComponentModel.DataAnnotations;

namespace FormsAndSession.ViewModels;

public class RegisterFormViewModel
{
    [Required(ErrorMessage = "Please enter username.")]
    [MinLength(3, ErrorMessage = "Username must be atleast three characters.")]
    public string Username { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter email.")]
    [EmailAddress(ErrorMessage = "Please enter a valid email.")]
    [DataType(DataType.EmailAddress)]
    [RegularExpression(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        ErrorMessage = "Email format is not valid."
    )]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter password.")]
    [MinLength(8, ErrorMessage = "Password must be atleast eight characters.")]
    [DataType(DataType.Password)]
    public string Password { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please confirm password.")]
    [MinLength(8, ErrorMessage = "Password must be atleast eight characters.")]
    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Passwords do not match.")]
    public string PasswordConfirm { get; set; } = string.Empty;
}
