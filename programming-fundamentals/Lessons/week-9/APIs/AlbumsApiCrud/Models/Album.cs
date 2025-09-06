using System.ComponentModel.DataAnnotations;

namespace AlbumsApiCrud.Models;

public class Album
{
    [Key]
    public int Id { get; set; }
    public int Rank { get; set; }
    public string Artist { get; set; } = string.Empty;
    public int ReleaseYear { get; set; }
    public string Genre { get; set; } = string.Empty;
    public string AlbumTitle { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public override string ToString()
    {
        return $@"
        Id: {Id}
        Rank: {Rank}
        Artist: {Artist}
        ReleaseYear: {ReleaseYear}
        Genre: {Genre}
        AlbumTitle: {AlbumTitle}";
    }
}
