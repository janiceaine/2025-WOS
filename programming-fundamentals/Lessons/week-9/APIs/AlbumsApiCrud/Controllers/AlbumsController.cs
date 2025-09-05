using AlbumsApiCrud.Classes;
using Microsoft.AspNetCore.Mvc;

namespace AlbumsApiCrud.Controllers;

[ApiController]
[Route("api/albums")]
public class AlbumsController : ControllerBase
{
    private static readonly List<Album> _albums = Album.GetAlbums();

    // Getting all albums
    [HttpGet("")]
    public ActionResult<List<Album>> GetAllAlbums()
    {
        if (_albums.Count == 0)
        {
            return NotFound("No Albums Found");
        }
        return Ok(_albums);
    }

    // Getting a single album by ID
    [HttpGet("{id}")]
    public ActionResult<Album> GetOneAlbum(int id)
    {
        var theAlbum = _albums.Where(album => album.Id == id).FirstOrDefault();
        if (theAlbum is null)
        {
            return NotFound("No Album was Found.");
        }
        return Ok();
    }

    // Creating a new album
    [HttpPost("")]
    public ActionResult<List<Album>> CreateAlbum([FromBody] Album newAlbum)
    {
        var nextId = _albums.Count == 0 ? 1 : _albums.Max(album => album.Id) + 1;
        newAlbum.Id = nextId;

        _albums.Add(newAlbum);
        return CreatedAtAction(nameof(GetOneAlbum), new { id = nextId }, newAlbum);
    }

    // Updating an album by ID
    [HttpPut("{id}")]
    public IActionResult UpdateAlbum(int id, [FromBody] Album updatedAlbum)
    {
        if (id != updatedAlbum.Id)
        {
            return BadRequest("Album ID in the URL does not match the ID in the request body.");
        }

        var maybeAlbum = _albums.FirstOrDefault(album => album.Id == id);
        if (maybeAlbum is null)
        {
            return NotFound("Album not Found.");
        }
        var albumIndex = _albums.IndexOf(maybeAlbum);
        _albums[albumIndex] = updatedAlbum;

        return NoContent();
    }

    // Deleting an album
    [HttpDelete("{id}")]
    public IActionResult DeleteAlbum(int id)
    {
        var albumToRemove = _albums.FirstOrDefault(album => album.Id == id);

        if (albumToRemove is null)
        {
            return NotFound("No Album Found.");
        }

        _albums.Remove(albumToRemove);
        return NoContent();
    }

    // Filter albums by Genre(Query String)
    [HttpGet("filter")]
    public ActionResult FilterAlbum(string genre)
    {
        var query = _albums.AsQueryable();

        if (!string.IsNullOrEmpty(genre))
        {
            query = query.Where(album =>
                album.Genre.Contains(genre, StringComparison.OrdinalIgnoreCase)
            );
        }
        var filteredAlbums = query.ToList();
        if (filteredAlbums.Count == 0)
        {
            return NotFound("No Albums Found matching this search criteria.");
        }
        return Ok(filteredAlbums);
    }

    // Search Albums by Artist or Title(Query
    [HttpGet("search")]
    public ActionResult SearchAlbum(string term)
    {
        var query = _albums.AsQueryable();

        if (string.IsNullOrEmpty(term))
        {
            query = query.Where(album =>
                album.Artist.Contains(term, StringComparison.OrdinalIgnoreCase)
                || album.AlbumTitle.Contains(term, StringComparison.OrdinalIgnoreCase)
            );
        }

        var foundAlbums = query.ToList();

        if (foundAlbums.Count == 0)
        {
            return NotFound("No Artists or Album Titles found matching the search criteria.");
        }
        return Ok(foundAlbums);
    }
}
