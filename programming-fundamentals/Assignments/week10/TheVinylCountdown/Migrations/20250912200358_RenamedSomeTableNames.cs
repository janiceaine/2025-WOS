using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheVinylCountdown.Migrations
{
    /// <inheritdoc />
    public partial class RenamedSomeTableNames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "UpdateAt", table: "Users", newName: "UpdatedAt");

            migrationBuilder.RenameColumn(name: "CreateAt", table: "Users", newName: "CreatedAt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "UpdatedAt", table: "Users", newName: "UpdateAt");

            migrationBuilder.RenameColumn(name: "CreatedAt", table: "Users", newName: "CreateAt");
        }
    }
}
