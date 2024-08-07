using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgricultureProject.Migrations
{
    /// <inheritdoc />
    public partial class initial3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderTable_ProductTable_Productid",
                table: "OrderTable");

            migrationBuilder.DropIndex(
                name: "IX_OrderTable_Productid",
                table: "OrderTable");

            migrationBuilder.DropColumn(
                name: "Productid",
                table: "OrderTable");

            migrationBuilder.AddColumn<string>(
                name: "ProductNames",
                table: "OrderTable",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Productids",
                table: "OrderTable",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Productid",
                table: "CartTable",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CartTable_Productid",
                table: "CartTable",
                column: "Productid");

            migrationBuilder.AddForeignKey(
                name: "FK_CartTable_ProductTable_Productid",
                table: "CartTable",
                column: "Productid",
                principalTable: "ProductTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartTable_ProductTable_Productid",
                table: "CartTable");

            migrationBuilder.DropIndex(
                name: "IX_CartTable_Productid",
                table: "CartTable");

            migrationBuilder.DropColumn(
                name: "ProductNames",
                table: "OrderTable");

            migrationBuilder.DropColumn(
                name: "Productids",
                table: "OrderTable");

            migrationBuilder.DropColumn(
                name: "Productid",
                table: "CartTable");

            migrationBuilder.AddColumn<int>(
                name: "Productid",
                table: "OrderTable",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderTable_Productid",
                table: "OrderTable",
                column: "Productid");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderTable_ProductTable_Productid",
                table: "OrderTable",
                column: "Productid",
                principalTable: "ProductTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
