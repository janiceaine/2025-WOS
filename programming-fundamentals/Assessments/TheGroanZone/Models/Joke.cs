using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.Models;

public class Joke
{
    [Key]
    public int Id { get; set; }

    public string Setup { get; set; } = string.Empty;

    public int Rating { get; set; }

    public DateOnly ReleaseDate { get; set; }

    // public string UploadedBy { get; set; } = string.Empty;

    public string Punchline { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Foreign Key
    public int UserId { get; set; }

    // Navigation Property
    public User? User { get; set; }
    public List<Rating> Ratings { get; set; } = [];
}
