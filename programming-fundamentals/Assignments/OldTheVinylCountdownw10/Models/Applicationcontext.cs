using Microsoft.EntityFrameworkCore;

namespace TheVinylCountdown.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Album> Albums { get; set; }

    public ApplicationContext(DbContextOptions options)
        : base(options) { }
}
