using AlbumsApiCrud.Models;

namespace AlbumsApiCrud.Data;

public static class DbSeeder
{
    public static void Seed(AlbumContext context)
    {
        string filePath = "Data/albums.json";
        var albums = Serializer.DeserializeFromFile<List<Album>>(filePath) ?? [];
        if (albums != null)
        {
            foreach (var album in albums)
            {
                if (
                    !context.Albums.Any(a =>
                        a.AlbumTitle == album.AlbumTitle && a.Artist == album.Artist
                    )
                )
                {
                    context.Albums.Add(album);
                }
            }
            context.SaveChanges();
            Console.WriteLine("Albums seeded from albums.json");
        }
        else
        {
            Console.WriteLine("Database already contains albums. Skipping seeding.");
        }
    }
}
