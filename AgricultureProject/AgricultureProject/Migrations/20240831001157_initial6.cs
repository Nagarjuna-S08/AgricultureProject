using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgricultureProject.Migrations
{
    /// <inheritdoc />
    public partial class initial6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LAndphoto2",
                table: "LandTable");

            migrationBuilder.DropColumn(
                name: "LAndphoto3",
                table: "LandTable");

            migrationBuilder.DropColumn(
                name: "LAndphoto4",
                table: "LandTable");

            migrationBuilder.DropColumn(
                name: "LAndphoto5",
                table: "LandTable");

            migrationBuilder.RenameColumn(
                name: "LAndphoto1",
                table: "LandTable",
                newName: "Landphoto1");

            migrationBuilder.AlterColumn<string>(
                name: "Productimage",
                table: "ProductTable",
                type: "text",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "bytea",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "buyerid",
                table: "ProductReviewsTable",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Landphoto1",
                table: "LandTable",
                type: "text",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "bytea",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductReviewsTable_buyerid",
                table: "ProductReviewsTable",
                column: "buyerid");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductReviewsTable_BuyerTable_buyerid",
                table: "ProductReviewsTable",
                column: "buyerid",
                principalTable: "BuyerTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductReviewsTable_BuyerTable_buyerid",
                table: "ProductReviewsTable");

            migrationBuilder.DropIndex(
                name: "IX_ProductReviewsTable_buyerid",
                table: "ProductReviewsTable");

            migrationBuilder.DropColumn(
                name: "buyerid",
                table: "ProductReviewsTable");

            migrationBuilder.RenameColumn(
                name: "Landphoto1",
                table: "LandTable",
                newName: "LAndphoto1");

            migrationBuilder.AlterColumn<byte[]>(
                name: "Productimage",
                table: "ProductTable",
                type: "bytea",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "LAndphoto1",
                table: "LandTable",
                type: "bytea",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "LAndphoto2",
                table: "LandTable",
                type: "bytea",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "LAndphoto3",
                table: "LandTable",
                type: "bytea",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "LAndphoto4",
                table: "LandTable",
                type: "bytea",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "LAndphoto5",
                table: "LandTable",
                type: "bytea",
                nullable: true);
        }
    }
}
