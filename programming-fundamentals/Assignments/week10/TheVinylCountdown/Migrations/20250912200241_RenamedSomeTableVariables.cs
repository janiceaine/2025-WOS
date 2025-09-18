using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheVinylCountdown.Migrations
{
    /// <inheritdoc />
    public partial class RenamedSomeTableVariables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "UpdateAt", table: "Albums", newName: "UpdatedAt");

            migrationBuilder.RenameColumn(name: "CreateAt", table: "Albums", newName: "CreatedAt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "UpdatedAt", table: "Albums", newName: "UpdateAt");

            migrationBuilder.RenameColumn(name: "CreatedAt", table: "Albums", newName: "CreateAt");
        }
    }
}
