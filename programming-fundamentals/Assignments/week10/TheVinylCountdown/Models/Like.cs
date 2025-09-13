using System.ComponentModel.DataAnnotations;

namespace TheVinylCountdown.Models;

public class Like
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public User? User { get; set; }

    // foreign key
    public int AlbumId { get; set; }

    // navigation property
    public Album? Album { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
