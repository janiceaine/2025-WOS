using Microsoft.EntityFrameworkCore;

namespace TheGroanZone.Models;

public class ApplicationContext : DbContext
{
    // DbSets to represent each table in the Db
    public DbSet<User> Users { get; set; }
    public DbSet<Joke> Jokes { get; set; }

    public DbSet<Rating> Ratings { get; set; }

    public ApplicationContext(DbContextOptions options)
        : base(options) { }
}
