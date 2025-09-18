using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.ViewModels;

public class RatingFormViewModel
{
    [Required(ErrorMessage = "Please select a rating.")]
    public int UserRating { get; set; }

    public int JokeId { get; set; }

    public int UserId { get; set; }
}
