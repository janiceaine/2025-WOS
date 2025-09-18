namespace TheGroanZone.ViewModels;

public class UserJokeStatsViewModel
{
    public int UserId { get; set; }
    public string UserName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public int Rating { get; set; }
    public int JokesCount { get; set; }

    public int JokesRated { get; set; }
}
