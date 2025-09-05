namespace AlbumsApiCrud.Classes;

public class Album
{
    public int Id { get; set; }
    public int Rank { get; set; }
    public string Artist { get; set; } = string.Empty;
    public int ReleaseYear { get; set; }
    public string Genre { get; set; } = string.Empty;
    public string AlbumTitle { get; set; } = string.Empty;

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

    public static List<Album> GetAlbums()
    {
        string filePath = "Data/albums.json";
        return Serializer.DeserializeFromFile<List<Album>>(filePath) ?? [];
    }
}
