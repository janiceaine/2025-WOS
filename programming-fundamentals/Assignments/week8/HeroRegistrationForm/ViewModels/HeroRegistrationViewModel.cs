using System.ComponentModel.DataAnnotations;

namespace HeroRegistrationForm.ViewModels;

public class HeroRegistrationViewModel()
{
    [Required(ErrorMessage = "Please eneter a Name")]
    [MinLength(3, ErrorMessage = "Name must be at least three characters.")]
    [MaxLength(45, ErrorMessage = "Name cannot exceed 45 characters.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please provide the Hero type.")]
    [MinLength(3, ErrorMessage = "Hero Type must be at least three characters.")]
    [MaxLength(45, ErrorMessage = "Hero Type cannot exceed 45 characters.")]
    public string HeroType { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter a level.")]
    [Range(1, 100, ErrorMessage = "Level must be between 1 and 100.")]
    public int Level { get; set; }

    [Required(ErrorMessage = "Please enter an email address.")]
    [EmailAddress(ErrorMessage = "Please enter a valid email.")]
    [DataType(DataType.EmailAddress)]
    [RegularExpression(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        ErrorMessage = "Email format is not valid."
    )]
    public string Email { get; set; } = string.Empty;
}
