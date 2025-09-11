using System.ComponentModel.DataAnnotations;

namespace BackLogBoss.ViewModels;

public class GameViewModel()
{
    public int? Id { get; set; }

    [Required(ErrorMessage = "Title is Required.")]
    [MinLength(2, ErrorMessage = "Title must be atleast 2 characters")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Platform is Required.")]
    [MinLength(2, ErrorMessage = "Platform must be atleast 2 characters")]
    public string Platform { get; set; } = string.Empty;

    [Required(ErrorMessage = "Completion confirmation is Required.")]
    public bool IsComplete { get; set; }

    [Required(ErrorMessage = "Notes are Required.")]
    [MinLength(5, ErrorMessage = "Notes must be atleast 2 characters")]
    public string Notes { get; set; } = string.Empty;
}
