using System.Threading.Tasks;
using AlbumsApiCrud.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AlbumsApiCrud.Controllers;

[ApiController]
[Route("api/async/albums")]
public class AlbumsAsyncController : ControllerBase
{
    private readonly AlbumContext _context;

    public AlbumsAsyncController(AlbumContext context)
    {
        _context = context;
    }

    // Getting all albums
    [HttpGet("")]
    public async Task<ActionResult<List<Album>>> GetAllAlbums()
    {
        var albums = await _context.Albums.ToListAsync();
        if (albums.Count == 0)
        {
            return NotFound("No Albums Found");
        }
        return Ok(_context.Albums);
    }

    // Getting a single album by ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Album>> GetOneAlbum(int id)
    {
        var theAlbum = await _context.Albums.Where(album => album.Id == id).FirstOrDefaultAsync();
        if (theAlbum is null)
        {
            return NotFound("No Album was Found.");
        }
        return Ok();
    }

    // Creating a new album
    [HttpPost("")]
    public async Task<ActionResult<List<Album>>> CreateAlbum([FromBody] Album newAlbum)
    {
        await _context.Albums.AddAsync(newAlbum);
        await _context.SaveChangesAsync();

        await _context.Albums.AddAsync(newAlbum);
        return CreatedAtAction(nameof(GetOneAlbum), new { id = newAlbum.Id }, newAlbum);
    }

    // Updating an album by ID
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAlbum(int id, [FromBody] Album updatedAlbum)
    {
        if (id != updatedAlbum.Id)
        {
            return BadRequest("Album ID in the URL does not match the ID in the request body.");
        }

        var maybeAlbum = await _context.Albums.FirstOrDefaultAsync(album => album.Id == id);
        if (maybeAlbum is null)
        {
            return NotFound("Album not Found.");
        }

        // updating the properties
        maybeAlbum.Rank = updatedAlbum.Rank;
        maybeAlbum.Artist = updatedAlbum.Artist;
        maybeAlbum.ReleaseYear = updatedAlbum.ReleaseYear;
        maybeAlbum.Genre = updatedAlbum.Genre;
        maybeAlbum.AlbumTitle = updatedAlbum.AlbumTitle;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    // Deleting an album
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAlbum(int id)
    {
        var albumToRemove = await _context.Albums.FirstOrDefaultAsync(album => album.Id == id);

        if (albumToRemove is null)
        {
            return NotFound("No Album Found.");
        }

        _context.Albums.Remove(albumToRemove);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // Filter albums by Genre(Query String)
    [HttpGet("filter")]
    public async Task<ActionResult> FilterAlbum(string genre)
    {
        var query = _context.Albums.AsQueryable();

        if (!string.IsNullOrEmpty(genre))
        {
            query = query.Where(album =>
                album.Genre.Contains(genre, StringComparison.OrdinalIgnoreCase)
            );
        }
        var filteredAlbums = await query.ToListAsync();
        if (filteredAlbums.Count == 0)
        {
            return NotFound("No Albums Found matching this search criteria.");
        }
        return Ok(filteredAlbums);
    }

    // Search Albums by Artist or Title(Query
    [HttpGet("search")]
    public async Task<ActionResult> SearchAlbum(string term)
    {
        var query = _context.Albums.AsQueryable();

        if (string.IsNullOrEmpty(term))
        {
            query = query.Where(album =>
                album.Artist.Contains(term, StringComparison.OrdinalIgnoreCase)
                || album.AlbumTitle.Contains(term, StringComparison.OrdinalIgnoreCase)
            );
        }

        var foundAlbums = await query.ToListAsync();

        if (foundAlbums.Count == 0)
        {
            return NotFound("No Artists or Album Titles found matching the search criteria.");
        }
        return Ok(foundAlbums);
    }
}
