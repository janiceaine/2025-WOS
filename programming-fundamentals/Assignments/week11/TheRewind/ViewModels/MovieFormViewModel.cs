using System.ComponentModel.DataAnnotations;
using TheRewind.Models;

namespace TheRewind.ViewModels;

public class MovieFormViewModel
{
    [Key]
    public int? Id { get; set; }

    public int UserId { get; set; }

    [Required(ErrorMessage = "Please enter Title.")]
    [MinLength(2, ErrorMessage = "Title must be atleast 2 characters.")]
    public string Title { get; set; } = string.Empty;

    public int Rating { get; set; }

    [Required(ErrorMessage = "Please enter Genre.")]
    [MinLength(2, ErrorMessage = "Genre must be atleast 2 characters.")]
    public string Genre { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter Release date.")]
    [DataType(DataType.Date)]
    public DateOnly ReleaseDate { get; set; }

    [Required(ErrorMessage = "Movie Description is required.")]
    [MinLength(8, ErrorMessage = "Description can not be less than 8 characters.")]
    public string Description { get; set; } = string.Empty;
    public string UploadedBy { get; set; } = string.Empty;
    public int RatingsCount { get; set; }
    public double? AverageRating { get; set; }
    public List<string> Raters { get; set; } = [];

    public RatingFormViewModel? RatingFormViewModel { get; set; }
}
