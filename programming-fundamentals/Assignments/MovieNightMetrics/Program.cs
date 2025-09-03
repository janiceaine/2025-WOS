using System.Collections.Immutable;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using MovieNightMetrics.Classes;

var movies = Serializer.DeserializeFromFile<List<Movie>>("Data/movies.json");

if (movies is null)
{
    Console.WriteLine("Failed to load games.");
    return;
}

// DateOnly objects can be compared directly using comparison operators.
// You will need to create DateOnly objects for the start and end of the decade.
var NYD1990 = new DateOnly(1990, 1, 1);
var NYE1999 = new DateOnly(1999, 12, 31);

// ------------------- //
//    LINQ Queries!
// ------------------- //

// Find all movies released in the 1990s (from 1990 to 1999, inclusive) Sorted in Ascending Order.
var moviesReleasedIn90s = movies
    .Where((movie) => movie.ReleaseDate.Year >= 1990 && movie.ReleaseDate.Year <= 1999)
    .OrderBy(Movie => Movie.ReleaseDate);
ConsoleUtils.PrintEach(moviesReleasedIn90s, "Movies Released In The 90s");

// Top 5 Highest Rated Movies
var highestRatedMovies = movies
    .OrderByDescending(movie => movie.Rating)
    .Take(5)
    .Select(movie => new
    {
        Title = movie.Title,
        Rating = movie.Rating,
        Director = movie.Director,
    });

Console.WriteLine("\nTop 5 Rated Movies");
foreach (var movie in highestRatedMovies)
{
    Console.WriteLine(
        $"\nTitle: {movie.Title}, \nRating: {movie.Rating}, \nDirector: {movie.Director}"
    );
}

// Metrics on "Action" Movies
var actionMovies = movies.Where(movie => movie.Genre == "Action");
ConsoleUtils.PrintEach(actionMovies, "All action Movies: ");

var actionMovieCount = movies.Count(movie => movie.Genre == "Action");
Console.WriteLine($"\nFound {actionMovieCount} Actioon movies.");

double actionMovieAverage = actionMovies.Average(movie => movie.DurationInMinutes);
Console.WriteLine($"\nAverage duration of the Action movies is {actionMovieAverage:F1} minutes.");

var latestActionMovie = actionMovies.OrderByDescending(movie => movie.ReleaseDate).FirstOrDefault();
Console.WriteLine($"\nThe latest Action movie is {latestActionMovie}.");

// Highest-Rated "Drama" Movie
var highestRatedMovie = movies
    .Where(movie => movie.Genre == "Drama")
    .OrderByDescending(movie => movie.Rating)
    .Select(movie => new { Title = movie.Title, Rating = movie.Rating })
    .FirstOrDefault();
Console.WriteLine("\nThe highest-rated Drama: ");
if (highestRatedMovie != null)
{
    Console.WriteLine($"Title: {highestRatedMovie.Title}, Rating: {highestRatedMovie.Rating}");
}
else
{
    Console.WriteLine("\nNo Drama movies found.");
}

var uniqueDirectors = movies
    .OrderBy(movie => movie.Director)
    .Select(movie => movie.Director)
    .Distinct();
ConsoleUtils.PrintEach(uniqueDirectors, "Unique Director Names: ");

// Longest and Shortest Movies
var longestMovie = movies
    .OrderByDescending(movie => movie.DurationInMinutes)
    .Select(movie => new { Title = movie.Title, DurationInMinutes = movie.DurationInMinutes })
    .FirstOrDefault();
if (longestMovie != null)
{
    Console.WriteLine(
        $"\nLongest Movie: {longestMovie.Title}, {longestMovie.DurationInMinutes} minutes."
    );
}
else
{
    Console.WriteLine("\nNo Longest movie Found.");
}

var shortestMovie = movies
    .OrderBy(movie => movie.DurationInMinutes)
    .Select(movie => new { Title = movie.Title, DurationInMinutes = movie.DurationInMinutes })
    .FirstOrDefault();
if (shortestMovie != null)
{
    Console.WriteLine(
        $"\nShortest Movie: {shortestMovie.Title}, {shortestMovie.DurationInMinutes} minutes."
    );
}
else
{
    Console.WriteLine("\nNo Shortest movie Found.");
}

// Movies by Director
Console.WriteLine($"\nWhat is the Director's name?");

// Prompt the user to enter a director's name.
string? userInput = Console.ReadLine();

// Use LINQ to find all movies directed by that person.
var allMoviesByDirector = movies
    .Where(movie => movie.Director == userInput)
    .Select(movie => (new { Title = movie.Title, ReleaseDate = movie.ReleaseDate }));

// Print the Title and ReleaseDate of all the movies found. If no movies are found, print a descriptive message.
Console.WriteLine($"Movies by {userInput}: ");
if (allMoviesByDirector.Any()) // I first used and intelli suggested Any() allMoviesByDirector.Count() == 0
{
    foreach (var movie in allMoviesByDirector)
    {
        Console.WriteLine($"\nTitle: {movie.Title} \nRelease Date: {movie.ReleaseDate}");
    }
}
else
{
    Console.WriteLine("No Movie Director Found.");
}

// Highly-Rated Short Films
var highlyRatedMovies = movies
    .Where(movie => movie.Rating >= 8.0 && movie.DurationInMinutes < 120)
    .Select(movie => new
    {
        Title = movie.Title,
        Rating = movie.Rating,
        DurationInMinutes = movie.DurationInMinutes,
    });

if (highlyRatedMovies.Any())
{
    foreach (var movie in highlyRatedMovies)
    {
        Console.WriteLine("\nHere is a list of Short Highly rated movies:");
        Console.WriteLine(
            $"\nTitle: {movie.Title} \nRating: {movie.Rating} \nDuration In Minutes: {movie.DurationInMinutes}"
        );
    }
}
else
{
    Console.WriteLine("\nNo highly rated short movies found.");
}
