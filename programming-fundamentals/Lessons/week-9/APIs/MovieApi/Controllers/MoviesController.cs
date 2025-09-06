using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;

namespace MovieApi.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController : ControllerBase
{
    // private readonly List<Movie> _movies; // Replacing Readonly with Static
    private readonly MovieContext _context;

    public MoviesController(MovieContext context)
    {
        _context = context;
    }

    // public MoviesController()
    // {
    //     // Load movie data from the JSON file on startup.
    //     string filePath = "Data/movies.json";
    //     _movies = Serializer.DeserializeFromFile<List<Movie>>(filePath) ?? [];
    // }

    // Action method to get all movies
    [HttpGet]
    public ActionResult<List<Movie>> GetAllMovies()
    {
        var movies = _context.Movies.ToList();
        if (movies.Count == 0)
        {
            return NotFound("No movies found."); // Returns a 404 Not Found status code
        }
        return Ok(movies); // Returns a 200 OK status code with the movie list
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
        var maybeMovie = _context.Movies.Where(movie => movie.Id == id).FirstOrDefault();
        if (maybeMovie is null)
        {
            return NotFound("No Movies Found.");
        }
        return Ok(maybeMovie);
    }

    [HttpGet("genres/{genre}")]
    public ActionResult<List<Movie>> GetSpecificGenre(string genre)
    {
        var filteredMovies = _context.Movies.Where(movie => movie.Genre == genre);
        if (filteredMovies is null)
        {
            return NotFound("No Movies Found for that genre.");
        }
        return Ok(filteredMovies);
    }

    // Controllers/MoviesController.cs (inside MoviesController class)

    [HttpGet("search")]
    public ActionResult<List<Movie>> Search(string? keyword, double? minRating)
    {
        var query = _context.Movies.AsQueryable();

        if (!string.IsNullOrEmpty(keyword))
        {
            query = query.Where(m => m.Title.Contains(keyword, StringComparison.OrdinalIgnoreCase));
        }

        if (minRating.HasValue)
        {
            query = query.Where(m => m.Rating >= minRating.Value);
        }

        var results = query.ToList();

        if (results.Count == 0)
        {
            return NotFound("No movies found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpGet("filter")]
    public ActionResult FilterMovies(string? genre, double? minRating)
    {
        var query = _context.Movies.AsQueryable();

        if (!string.IsNullOrEmpty(genre))
        {
            query = query.Where(m => m.Genre.Contains(genre, StringComparison.OrdinalIgnoreCase));
        }

        if (minRating.HasValue)
        {
            query = query.Where(m => m.Rating >= minRating.Value);
        }

        var results = query.ToList();

        if (string.IsNullOrEmpty(genre) && !minRating.HasValue)
        {
            return Ok(new { Message = "Showing all movies", Data = results });
        }

        if (results.Count == 0)
        {
            return NotFound("No movies found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpPost("")]
    public ActionResult<Movie> CreateMovie([FromBody] Movie newMovie)
    {
        // var nextId = _context.Movies.Count() == 0 ? 1 : _context.Movies.Max(m => m.Id) + 1;
        // newMovie.Id = nextId;

        _context.Movies.Add(newMovie);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetOneMovie), new { id = newMovie.Id }, newMovie);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateMovie(int id, [FromBody] Movie updatedMovie)
    {
        // Check if the provided ID from the URL matches the ID in the request body
        if (id != updatedMovie.Id)
        {
            return BadRequest("Movie ID in the URL does not match the ID in the request body.");
        }

        var maybeMovie = _context.Movies.FirstOrDefault((m) => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound("Movie not found.");
        }

        // Update the properties of the found movie
        maybeMovie.Title = updatedMovie.Title;
        maybeMovie.Director = updatedMovie.Director;
        maybeMovie.Genre = updatedMovie.Genre;
        maybeMovie.ReleaseDate = updatedMovie.ReleaseDate;
        maybeMovie.Rating = updatedMovie.Rating;
        maybeMovie.DurationInMinutes = updatedMovie.DurationInMinutes;
        maybeMovie.UpdatedAt = DateTime.UtcNow;

        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteMovie(int id)
    {
        var movieToRemove = _context.Movies.FirstOrDefault(m => m.Id == id);

        if (movieToRemove is null)
        {
            return NotFound("Movie not found.");
        }

        _context.Remove(movieToRemove);
        return NoContent();
    }
}
