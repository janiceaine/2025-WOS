using Microsoft.EntityFrameworkCore;

namespace MovieApi.Models;

public class MovieContext : DbContext
{
    // DbSet<T> properties represent our tables
    public DbSet<Movie> Movies { get; set; }

    // The constructor will be configured in Program.cs
    public MovieContext(DbContextOptions<MovieContext> options)
        : base(options) { }
}
