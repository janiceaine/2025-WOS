using System.ComponentModel.DataAnnotations;

namespace TheVinylCountdown.ViewModels;

public class AlbumFormViewModel
{
    [Key]
    public int? Id { get; set; }

    [Required(ErrorMessage = "Albuum Title is required.")]
    [MinLength(3, ErrorMessage = "Arlbum Title can not be less than 3 characters.")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Artist Name is required.")]
    [MinLength(3, ErrorMessage = "Artist Name can not be less than 3 characters.")]
    public string Artist { get; set; } = string.Empty;
}
