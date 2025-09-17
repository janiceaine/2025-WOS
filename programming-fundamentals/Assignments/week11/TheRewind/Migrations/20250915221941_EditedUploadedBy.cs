using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheRewind.Migrations
{
    /// <inheritdoc />
    public partial class EditedUploadedBy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UploadedBy",
                table: "Movies");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UploadedBy",
                table: "Movies",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
