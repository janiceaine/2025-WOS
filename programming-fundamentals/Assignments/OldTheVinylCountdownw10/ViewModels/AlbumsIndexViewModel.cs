namespace TheVinylCountdown.ViewModels;

public class AlbumsIndexViewModel
{
    // a list of all the albums displayed in the table
    public List<AlbumsRowViewModel> Albums { get; set; }

    // To ensure that the list is never null
    public AlbumsIndexViewModel()
    {
        Albums = new List<AlbumsRowViewModel>();
    }
}
