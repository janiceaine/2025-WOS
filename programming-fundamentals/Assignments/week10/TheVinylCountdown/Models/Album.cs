using System.ComponentModel.DataAnnotations;

namespace TheVinylCountdown.Models;

public class Album
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Foreign Key
    public int UserId { get; set; }

    // Navigation Property
    public User? User { get; set; }
}
