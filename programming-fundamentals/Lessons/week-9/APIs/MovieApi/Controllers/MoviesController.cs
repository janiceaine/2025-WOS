using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Classes;

namespace MovieApi.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController : ControllerBase
{
    private readonly List<Movie> _movies;

    public MoviesController()
    {
        // Load movie data from the JSON file on startup.
        string filePath = "Data/movies.json";
        _movies = Serializer.DeserializeFromFile<List<Movie>>(filePath) ?? [];
    }

    // Action method to get all movies
    [HttpGet]
    public ActionResult<List<Movie>> GetAllMovies()
    {
        if (_movies.Count == 0)
        {
            return NotFound("No movies found."); // Returns a 404 Not Found status code
        }
        return Ok(_movies); // Returns a 200 OK status code with the movie list
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
        var maybeMovie = _movies.Where(movie => movie.MovieId == id).FirstOrDefault();
        if (maybeMovie is null)
        {
            return NotFound("No Movies Found.");
        }
        return Ok(maybeMovie);
    }

    [HttpGet("genres/{genre}")]
    public ActionResult<List<Movie>> GetSpecificGenre(string genre)
    {
        var filteredMovies = _movies.Where(movie => movie.Genre == genre);
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
        var query = _movies.AsQueryable();

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
        var query = _movies.AsQueryable();

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
}
