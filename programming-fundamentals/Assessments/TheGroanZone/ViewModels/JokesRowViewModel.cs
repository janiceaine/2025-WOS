namespace TheGroanZone.ViewModels;

public class JokesRowViewModel
{
    public int? Id { get; set; }
    public string Setup { get; set; } = string.Empty;
    public string Punchline { get; set; } = string.Empty;
    public int? Rating { get; set; }
    public int? UserRating { get; set; }
    public double? AverageRating { get; set; }
    public string UploadedBy { get; set; } = string.Empty;
    public int UploaderId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string CreateDate { get; set; } = string.Empty;
}
