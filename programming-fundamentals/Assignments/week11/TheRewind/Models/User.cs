using System.ComponentModel.DataAnnotations;

namespace TheRewind.Models;

public class User
{
    [Key]
    public int Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation Properties
    public List<Movie> Movies { get; set; } = [];

    public List<Rating> Ratings { get; set; } = [];
}
