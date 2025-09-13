namespace TheVinylCountdown.ViewModels;

public class AlbumsRowViewModel
{
    public int? Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public string UploadedBy { get; set; } = string.Empty;
    public int LikeCount { get; set; }
    public bool LikedByMe { get; set; }
}
