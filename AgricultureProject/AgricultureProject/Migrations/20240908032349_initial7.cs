using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgricultureProject.Migrations
{
    /// <inheritdoc />
    public partial class initial7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Sellerid",
                table: "WishlistTable",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_WishlistTable_Sellerid",
                table: "WishlistTable",
                column: "Sellerid");

            migrationBuilder.AddForeignKey(
                name: "FK_WishlistTable_SellerTable_Sellerid",
                table: "WishlistTable",
                column: "Sellerid",
                principalTable: "SellerTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WishlistTable_SellerTable_Sellerid",
                table: "WishlistTable");

            migrationBuilder.DropIndex(
                name: "IX_WishlistTable_Sellerid",
                table: "WishlistTable");

            migrationBuilder.DropColumn(
                name: "Sellerid",
                table: "WishlistTable");
        }
    }
}
