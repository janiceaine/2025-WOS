using System.ComponentModel.DataAnnotations;

namespace TheRewind.Models;

public class Rating
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int UserRating { get; set; }
    public User? User { get; set; }

    // foreign key
    public int MovieId { get; set; }

    // navigation property
    public Movie? Movie { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
