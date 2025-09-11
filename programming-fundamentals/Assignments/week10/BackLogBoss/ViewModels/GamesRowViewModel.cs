namespace BackLogBoss.ViewModels;

public class GamesRowViewModel
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Platform { get; set; } = string.Empty;
    public bool IsComplete { get; set; }
    public string Notes { get; set; } = string.Empty;
}
