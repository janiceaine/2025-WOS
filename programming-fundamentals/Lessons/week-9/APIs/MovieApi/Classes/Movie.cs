namespace MovieApi.Classes;

public class Movie
{
    public int MovieId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Director { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public DateOnly ReleaseDate { get; set; }
    public double Rating { get; set; }
    public int DurationInMinutes { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public override string ToString()
    {
        return $@"
MovieID: {MovieId}
Movie: {Title} ({ReleaseDate.ToString("MMMM d, yyyy")}), {DurationInMinutes} min.
Director: {Director}
Genre: {Genre}
Rating: {Rating}";
    }

    // updating this controller with a GetMovies method
    public static List<Movie> GetMovies()
    {
        string filePath = "Data/movies.json";
        return Serializer.DeserializeFromFile<List<Movie>>(filePath) ?? [];
    }
}
