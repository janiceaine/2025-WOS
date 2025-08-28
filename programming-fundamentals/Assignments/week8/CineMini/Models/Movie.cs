namespace CineMini.Models;

public class Movie
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public int ReleaseYear { get; set; }
    public bool IsFeatured { get; set; }
    public bool IsClassic { get; set; }
    public string ImagePath { get; set; } = string.Empty;
}
