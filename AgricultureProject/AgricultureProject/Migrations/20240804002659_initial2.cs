using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgricultureProject.Migrations
{
    /// <inheritdoc />
    public partial class initial2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WishlistTable_SellerTable_Sellerid",
                table: "WishlistTable");

            migrationBuilder.RenameColumn(
                name: "Sellerid",
                table: "WishlistTable",
                newName: "Landid");

            migrationBuilder.RenameIndex(
                name: "IX_WishlistTable_Sellerid",
                table: "WishlistTable",
                newName: "IX_WishlistTable_Landid");

            migrationBuilder.AddForeignKey(
                name: "FK_WishlistTable_LandTable_Landid",
                table: "WishlistTable",
                column: "Landid",
                principalTable: "LandTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WishlistTable_LandTable_Landid",
                table: "WishlistTable");

            migrationBuilder.RenameColumn(
                name: "Landid",
                table: "WishlistTable",
                newName: "Sellerid");

            migrationBuilder.RenameIndex(
                name: "IX_WishlistTable_Landid",
                table: "WishlistTable",
                newName: "IX_WishlistTable_Sellerid");

            migrationBuilder.AddForeignKey(
                name: "FK_WishlistTable_SellerTable_Sellerid",
                table: "WishlistTable",
                column: "Sellerid",
                principalTable: "SellerTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
