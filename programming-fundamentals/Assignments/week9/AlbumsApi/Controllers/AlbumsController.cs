using AlbumsApi.Classes;
using Microsoft.AspNetCore.Mvc;

namespace AlbumsApi.Controllers;

[ApiController]
[Route("api/albums")]
public class AlbumsController : ControllerBase
{
    private readonly List<Album> _albums;

    public AlbumsController()
    {
        //  loading the data from albums.json
        string filePath = "Data/albums.json";
        _albums = Serializer.DeserializeFromFile<List<Album>>(filePath) ?? [];
    }

    // Action method to Get all Albums
    [HttpGet("")]
    public ActionResult GetAllAlbums()
    {
        if (_albums.Count == 0)
        {
            return NotFound("No Albums Found.");
        }
        return Ok(_albums);
    }

    // Action Method to Get a single Album by ID
    [HttpGet("{id}")]
    public ActionResult GetOneAlbum(int id)
    {
        var theAlbum = _albums.Where(album => album.Id == id).FirstOrDefault();
        if (theAlbum is null)
        {
            return NotFound("No Album Found");
        }
        return Ok(theAlbum);
    }

    // Action Method to Filter Albums by Genre (Query String)
    [HttpGet("filter")]
    public ActionResult FilterAlbum(string? genre)
    {
        // var filteredAlbum = _albums.Where(album => album.Genre == genre);
        // if (filteredAlbum is null)
        // {
        //     return NotFound("No Albuum Found of this Genre.");
        // }
        // return Ok(filteredAlbum);

        var query = _albums.AsQueryable();
        if (!string.IsNullOrEmpty(genre))
        {
            query = query.Where(album =>
                album.Genre.Contains(genre, StringComparison.OrdinalIgnoreCase)
            );
        }

        var results = query.ToList();

        if (string.IsNullOrEmpty(genre))
        {
            return Ok(new { Message = "Showing all Albums", Data = results });
        }

        if (results.Count == 0)
        {r
            return NotFound("No Albums found matching the search criteria.");
        }
        return Ok(results);
    }

    // Action Method to Search Albums by Artist or Title (Query String)
    [HttpGet("search")]
    public ActionResult AlbumSearch(string? term)
    {
        var query = _albums.AsQueryable();
        if (!string.IsNullOrEmpty(term))
        {
            query = query.Where(album =>
                album.Artist.Contains(term, StringComparison.OrdinalIgnoreCase)
                || album.AlbumTitle.Contains(term, StringComparison.OrdinalIgnoreCase)
            );
        }
        var foundAlbums = query.ToList();
        if (string.IsNullOrEmpty(term))
        {
            return Ok(new { Message = "Showing all Albums", Data = foundAlbums });
        }

        if (foundAlbums.Count == 0)
        {
            return NotFound("No Artists or Album Titles found matching the search criteria.");
        }
        return Ok(foundAlbums);
    }
}
