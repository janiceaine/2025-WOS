namespace TheRewind.ViewModels;

public class UserMovieStatsViewModel
{
    public int UserId { get; set; }
    public string UserName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public int Rating { get; set; }
    public int MovieCount { get; set; }

    public int MoviesRated { get; set; }
}
