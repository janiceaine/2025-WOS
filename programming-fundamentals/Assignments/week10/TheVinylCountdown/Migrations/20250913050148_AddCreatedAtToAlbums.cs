using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheVinylCountdown.Migrations
{
    /// <inheritdoc />
    public partial class AddCreatedAtToAlbums : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Likes",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
            );

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Likes",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
            );

            migrationBuilder.CreateIndex(
                name: "IX_Likes_AlbumId",
                table: "Likes",
                column: "AlbumId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Albums_AlbumId",
                table: "Likes",
                column: "AlbumId",
                principalTable: "Albums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_Likes_Albums_AlbumId", table: "Likes");

            migrationBuilder.DropIndex(name: "IX_Likes_AlbumId", table: "Likes");

            migrationBuilder.DropColumn(name: "CreatedAt", table: "Likes");

            migrationBuilder.DropColumn(name: "UpdatedAt", table: "Likes");
        }
    }
}
