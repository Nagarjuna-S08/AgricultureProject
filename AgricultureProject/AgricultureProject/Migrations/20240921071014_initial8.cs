using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgricultureProject.Migrations
{
    /// <inheritdoc />
    public partial class initial8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProductAmount",
                table: "OrderTable",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "productQuantities",
                table: "OrderTable",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductAmount",
                table: "OrderTable");

            migrationBuilder.DropColumn(
                name: "productQuantities",
                table: "OrderTable");
        }
    }
}
