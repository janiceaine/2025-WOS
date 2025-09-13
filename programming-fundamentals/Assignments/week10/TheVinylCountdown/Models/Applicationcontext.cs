using Microsoft.EntityFrameworkCore;

namespace TheVinylCountdown.Models;

public class ApplicationContext : DbContext
{
    // DbSets to represent each table in the Db
    public DbSet<User> Users { get; set; }
    public DbSet<Album> Albums { get; set; }

    public DbSet<Like> Likes { get; set; }

    public ApplicationContext(DbContextOptions options)
        : base(options) { }
}
