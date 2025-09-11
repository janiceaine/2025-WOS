using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthForge.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UsersGS",
                table: "UsersGS");

            migrationBuilder.RenameTable(
                name: "UsersGS",
                newName: "Users");

            migrationBuilder.RenameColumn(
                name: "updateAt",
                table: "Users",
                newName: "UpdateAt");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "UsersGS");

            migrationBuilder.RenameColumn(
                name: "UpdateAt",
                table: "UsersGS",
                newName: "updateAt");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UsersGS",
                table: "UsersGS",
                column: "Id");
        }
    }
}
