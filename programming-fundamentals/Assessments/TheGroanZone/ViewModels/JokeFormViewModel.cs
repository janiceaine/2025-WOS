using System.ComponentModel.DataAnnotations;
using TheGroanZone.Models;

namespace TheGroanZone.ViewModels;

public class JokeFormViewModel
{
    [Key]
    public int? Id { get; set; }

    public int UserId { get; set; }

    [Required(ErrorMessage = "Please enter joke Setup.")]
    [MinLength(2, ErrorMessage = "Setup must be atleast 2 characters.")]
    public string Setup { get; set; } = string.Empty;

    public int Rating { get; set; }

    [Required(ErrorMessage = "Joke Punchline is required.")]
    [MinLength(8, ErrorMessage = "Punchline can not be less than 8 characters.")]
    public string Punchline { get; set; } = string.Empty;
    public int UploaderId { get; set; }
    public string UploadedBy { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public int RatingsCount { get; set; }
    public double? AverageRating { get; set; }
    public List<string> Raters { get; set; } = [];

    public RatingFormViewModel? RatingFormViewModel { get; set; }
}
