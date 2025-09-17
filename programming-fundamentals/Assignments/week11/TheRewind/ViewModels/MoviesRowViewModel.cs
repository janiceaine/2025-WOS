namespace TheRewind.ViewModels;

public class MoviesRowViewModel
{
    public int? Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public int? Rating { get; set; }
    public int? UserRating { get; set; }
    public double? AverageRating { get; set; }
    public string UploadedBy { get; set; } = string.Empty;
    public int UploaderId { get; set; }
}
