using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace AgricultureProject.Migrations
{
    /// <inheritdoc />
    public partial class initial1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BuyerTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Buyername = table.Column<string>(type: "text", nullable: true),
                    email = table.Column<string>(type: "text", nullable: true),
                    Buyeraddress = table.Column<string>(type: "text", nullable: true),
                    Buyerphonenumber = table.Column<string>(type: "text", nullable: true),
                    Buyerpassword = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BuyerTable", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SellerTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Organizationname = table.Column<string>(type: "text", nullable: true),
                    email = table.Column<string>(type: "text", nullable: true),
                    Organizationaddress = table.Column<string>(type: "text", nullable: true),
                    Organizationphonenumber = table.Column<string>(type: "text", nullable: true),
                    Organizationpassword = table.Column<string>(type: "text", nullable: true),
                    Leadername = table.Column<string>(type: "text", nullable: true),
                    Leaderaadharnumber = table.Column<string>(type: "text", nullable: true),
                    Leaderaddress = table.Column<string>(type: "text", nullable: true),
                    Leaderphone = table.Column<string>(type: "text", nullable: true),
                    Leaderemail = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellerTable", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CartTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Sellerid = table.Column<int>(type: "integer", nullable: false),
                    Buyerid = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: false),
                    Totalamount = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartTable_BuyerTable_Buyerid",
                        column: x => x.Buyerid,
                        principalTable: "BuyerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CartTable_SellerTable_Sellerid",
                        column: x => x.Sellerid,
                        principalTable: "SellerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LandTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Sellerid = table.Column<int>(type: "integer", nullable: false),
                    Ownername = table.Column<string>(type: "text", nullable: true),
                    Landarea = table.Column<double>(type: "double precision", nullable: false),
                    Landprice = table.Column<double>(type: "double precision", nullable: false),
                    Landaddress = table.Column<string>(type: "text", nullable: true),
                    Updateddate = table.Column<string>(type: "text", nullable: true),
                    LAndphoto1 = table.Column<byte[]>(type: "bytea", nullable: true),
                    LAndphoto2 = table.Column<byte[]>(type: "bytea", nullable: true),
                    LAndphoto3 = table.Column<byte[]>(type: "bytea", nullable: true),
                    LAndphoto4 = table.Column<byte[]>(type: "bytea", nullable: true),
                    LAndphoto5 = table.Column<byte[]>(type: "bytea", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LandTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LandTable_SellerTable_Sellerid",
                        column: x => x.Sellerid,
                        principalTable: "SellerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Productname = table.Column<string>(type: "text", nullable: true),
                    Sellerid = table.Column<int>(type: "integer", nullable: false),
                    Totalquantity = table.Column<double>(type: "double precision", nullable: false),
                    AmountperKG = table.Column<double>(type: "double precision", nullable: false),
                    Harvesteddate = table.Column<string>(type: "text", nullable: true),
                    Updateddate = table.Column<string>(type: "text", nullable: true),
                    Productimage = table.Column<byte[]>(type: "bytea", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductTable_SellerTable_Sellerid",
                        column: x => x.Sellerid,
                        principalTable: "SellerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WishlistTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Sellerid = table.Column<int>(type: "integer", nullable: false),
                    Buyerid = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WishlistTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WishlistTable_BuyerTable_Buyerid",
                        column: x => x.Buyerid,
                        principalTable: "BuyerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WishlistTable_SellerTable_Sellerid",
                        column: x => x.Sellerid,
                        principalTable: "SellerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Sellerid = table.Column<int>(type: "integer", nullable: false),
                    Buyerid = table.Column<int>(type: "integer", nullable: false),
                    Productid = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: false),
                    Totalamount = table.Column<double>(type: "double precision", nullable: false),
                    Delivarydate = table.Column<string>(type: "text", nullable: true),
                    Paymentmethod = table.Column<string>(type: "text", nullable: true),
                    Paymentdate = table.Column<string>(type: "text", nullable: true),
                    Status = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderTable_BuyerTable_Buyerid",
                        column: x => x.Buyerid,
                        principalTable: "BuyerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderTable_ProductTable_Productid",
                        column: x => x.Productid,
                        principalTable: "ProductTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderTable_SellerTable_Sellerid",
                        column: x => x.Sellerid,
                        principalTable: "SellerTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartTable_Buyerid",
                table: "CartTable",
                column: "Buyerid");

            migrationBuilder.CreateIndex(
                name: "IX_CartTable_Sellerid",
                table: "CartTable",
                column: "Sellerid");

            migrationBuilder.CreateIndex(
                name: "IX_LandTable_Sellerid",
                table: "LandTable",
                column: "Sellerid");

            migrationBuilder.CreateIndex(
                name: "IX_OrderTable_Buyerid",
                table: "OrderTable",
                column: "Buyerid");

            migrationBuilder.CreateIndex(
                name: "IX_OrderTable_Productid",
                table: "OrderTable",
                column: "Productid");

            migrationBuilder.CreateIndex(
                name: "IX_OrderTable_Sellerid",
                table: "OrderTable",
                column: "Sellerid");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTable_Sellerid",
                table: "ProductTable",
                column: "Sellerid");

            migrationBuilder.CreateIndex(
                name: "IX_WishlistTable_Buyerid",
                table: "WishlistTable",
                column: "Buyerid");

            migrationBuilder.CreateIndex(
                name: "IX_WishlistTable_Sellerid",
                table: "WishlistTable",
                column: "Sellerid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartTable");

            migrationBuilder.DropTable(
                name: "LandTable");

            migrationBuilder.DropTable(
                name: "OrderTable");

            migrationBuilder.DropTable(
                name: "WishlistTable");

            migrationBuilder.DropTable(
                name: "ProductTable");

            migrationBuilder.DropTable(
                name: "BuyerTable");

            migrationBuilder.DropTable(
                name: "SellerTable");
        }
    }
}
