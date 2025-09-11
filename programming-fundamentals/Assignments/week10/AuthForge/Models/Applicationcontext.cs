using Microsoft.EntityFrameworkCore;

namespace AuthForge.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }

    public ApplicationContext(DbContextOptions options)
        : base(options) { }
}
