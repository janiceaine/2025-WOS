using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class RatingFormViewModel
{
    [Required(ErrorMessage = "Please select a rating.")]
    public int UserRating { get; set; }

    public int MovieId { get; set; }

    public int UserId { get; set; }
}
