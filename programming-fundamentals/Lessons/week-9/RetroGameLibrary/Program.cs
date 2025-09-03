using RetroGameLibrary.Classes;

var games = Serializer.DeserializeFromFile<List<Game>>("Data/games.json");

if (games is null)
{
    Console.WriteLine("Failed to load games from games.json.");
    return;
}

// ------------------- //
// LINQ Queries go here!
// ------------------- //

var highlyRatedGames = games.Where(game => game.Rating >= 9.0);
ConsoleUtils.PrintEach(highlyRatedGames, "Highly-rated Games (9.0 or higher)");

var classicGames = games.Where(game => game.ReleaseYear < 1990);
ConsoleUtils.PrintEach(classicGames, "Classic Games (released before 1990)");

// Sort all games by release year in ascending order
var gamesByYear = games.OrderBy(game => game.ReleaseYear);
ConsoleUtils.PrintEach(gamesByYear, "Games sorted by Release Year (Ascending)");

// Sort all games by rating in descending order
var gamesByRatingDesc = games.OrderByDescending(game => game.Rating);
ConsoleUtils.PrintEach(gamesByRatingDesc, "Games sorted by Rating (Descending)");

// Sort by console, then by release year
var gamesByConsoleThenYear = games.OrderBy(game => game.Console).ThenBy(game => game.ReleaseYear);
ConsoleUtils.PrintEach(gamesByConsoleThenYear, "Games sorted by Console, then by Release Year");

// Find all games on a play station, ordered by Title in Ascending order
var gamesOnPlayStation = games
    .Where(game => game.Console == "PlayStation")
    .OrderBy(game => game.Title);
ConsoleUtils.PrintEach(gamesOnPlayStation, "PlayStation Games sorted by Title (Ascending)");

// Find all games released in 1997, sorted in Descending order by Title
var gamesReleasedIn1997 = games
    .Where(game => game.ReleaseYear == 1997)
    .OrderByDescending(game => game.Title);
ConsoleUtils.PrintEach(gamesReleasedIn1997, "Games released in 1997 sorted by Title (Descending)");

// All Games in 'NES' Orderd by Release Year (Descending) Then by Descending order
var nesGames = games
    .Where(game => game.Console == "NES")
    .OrderBy(game => game.ReleaseYear)
    .ThenByDescending(game => game.Rating);
ConsoleUtils.PrintEach(
    nesGames,
    "All Games in 'NES' Orderd by Release Year in Descending order Then by Descending order in Rating: "
);

// Get the total number of games in the collection
int totalGames = games.Count();
Console.WriteLine($"\nTotal number of games: {totalGames}");

// Get the number of games released in the 90s (1990-1999)
int gamesIn90s = games.Count(game => game.ReleaseYear >= 1990 && game.ReleaseYear <= 1999);
Console.WriteLine($"Total games from the 90s: {gamesIn90s}");

// Sum the ratings of all games
double totalRatingSum = games.Sum(game => game.Rating);
Console.WriteLine($"Total sum of all ratings: {totalRatingSum:F2}");

// Find the highest and lowest rating
double highestRating = games.Max(game => game.Rating);
double lowestRating = games.Min(game => game.Rating);
Console.WriteLine($"\nHighest rating: {highestRating:F1}");
Console.WriteLine($"Lowest rating: {lowestRating:F1}");

// Calculate the average rating of all games
double averageRating = games.Average(game => game.Rating);
Console.WriteLine($"Average rating of all games: {averageRating:F2}");

// var firstItem = collection.First(item => condition);

// Get the first item where condition is true, or null
// var firstItemOrNull = collection.FirstOrDefault(item => condition);

var specificGame = games.FirstOrDefault(game => game.Rating == 9.7);

// Always check for null when using FirstOrDefault!
if (specificGame is not null)
{
    Console.WriteLine($"\nFound a game with a 9.7 rating: {specificGame.Title}");
}
else
{
    Console.WriteLine("\nNo game found with a 9.7 rating.");
}

int snesGames = games.Count(game => game.Console == "SNES");
Console.WriteLine($"\nTotal number of games on the SNES console:  {snesGames}");

var latestGameReleased = games.Max(game => game.ReleaseYear);
Console.WriteLine($"Latest game released: {latestGameReleased}");

var fortnightGame = games.FirstOrDefault(game => game.Title == "Fortnight");
if (fortnightGame is not null)
{
    Console.WriteLine($"\nFound the game with title: {fortnightGame.Title}");
}
else
{
    Console.WriteLine("\nNo game found with a title: Fortnight.");
}

// Select only the Title of each game
var gameTitles = games.Select(game => game.Title);
ConsoleUtils.PrintEach(gameTitles, "Game Titles:");

// Select only the Title and ReleaseYear of each game, into a new anonymous object
var gameTitlesAndYears = games.Select(game => new { Title = game.Title, Year = game.ReleaseYear });

Console.WriteLine("\nGame Titles and Release Years:");
foreach (var game in gameTitlesAndYears)
{
    Console.WriteLine($"{game.Title} ({game.Year})");
}

// Filter for SNES games and immediately execute the query into a new List
List<Game> snesGamesList = games.Where(game => game.Console == "SNES").ToList();

Console.WriteLine($"\nFound {snesGamesList.Count} SNES games.");

// Chain multiple methods together
var topRatedRecentGames = games
    .Where(game => game.ReleaseYear > 1995) // Filter
    .OrderByDescending(game => game.Rating) // Sort
    .Take(5) // Get the top 5 (Take is another useful method!)
    .Select(game => new { Title = game.Title, Rating = game.Rating }) // Project
    .ToList(); // Execute the query and put results in a List

Console.WriteLine("\nTop 5 Games released after 1995:");
foreach (var game in topRatedRecentGames)
{
    Console.WriteLine($"Title: {game.Title}, Rating: {game.Rating:F1}");
}
