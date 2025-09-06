using AlbumsApiCrud.Data;
using AlbumsApiCrud.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Validations;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("MySqlConnection");

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddDbContext<AlbumContext>(
    (options) =>
    {
        options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
    }
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AlbumContext>();
    DbSeeder.Seed(context);
}

app.UseHttpsRedirection();

app.MapControllers();
app.Run();
