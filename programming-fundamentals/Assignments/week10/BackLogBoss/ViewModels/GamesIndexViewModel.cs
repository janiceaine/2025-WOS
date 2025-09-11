namespace BackLogBoss.ViewModels;

public class GamesIndexViewModel
{
    // a List of all the games displayed in the table
    public List<GamesRowViewModel> Games { get; set; }

    // To ensure that the list is never null
    public GamesIndexViewModel()
    {
        Games = new List<GamesRowViewModel>();
    }
}
