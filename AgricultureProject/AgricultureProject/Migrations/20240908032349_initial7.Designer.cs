﻿// <auto-generated />
using AgricultureProject.AppDbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace AgricultureProject.Migrations
{
    [DbContext(typeof(DbConnection))]
    [Migration("20240908032349_initial7")]
    partial class initial7
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("AgricultureProject.Model.BuyerDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Buyeraddress")
                        .HasColumnType("text");

                    b.Property<string>("Buyername")
                        .HasColumnType("text");

                    b.Property<string>("Buyerpassword")
                        .HasColumnType("text");

                    b.Property<string>("Buyerphonenumber")
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("BuyerTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.CartDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Buyerid")
                        .HasColumnType("integer");

                    b.Property<int>("Productid")
                        .HasColumnType("integer");

                    b.Property<double>("Quantity")
                        .HasColumnType("double precision");

                    b.Property<int>("Sellerid")
                        .HasColumnType("integer");

                    b.Property<double>("Totalamount")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.HasIndex("Buyerid");

                    b.HasIndex("Productid");

                    b.HasIndex("Sellerid");

                    b.ToTable("CartTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.LandDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Landaddress")
                        .HasColumnType("text");

                    b.Property<double>("Landarea")
                        .HasColumnType("double precision");

                    b.Property<string>("Landphoto1")
                        .HasColumnType("text");

                    b.Property<double>("Landprice")
                        .HasColumnType("double precision");

                    b.Property<string>("Ownername")
                        .HasColumnType("text");

                    b.Property<int>("Sellerid")
                        .HasColumnType("integer");

                    b.Property<string>("Updateddate")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Sellerid");

                    b.ToTable("LandTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.OrderDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Buyerid")
                        .HasColumnType("integer");

                    b.Property<string>("Delivarydate")
                        .HasColumnType("text");

                    b.Property<string>("Paymentdate")
                        .HasColumnType("text");

                    b.Property<string>("Paymentmethod")
                        .HasColumnType("text");

                    b.Property<string>("ProductNames")
                        .HasColumnType("text");

                    b.Property<string>("Productids")
                        .HasColumnType("text");

                    b.Property<double>("Quantity")
                        .HasColumnType("double precision");

                    b.Property<int>("Sellerid")
                        .HasColumnType("integer");

                    b.Property<string>("Status")
                        .HasColumnType("text");

                    b.Property<double>("Totalamount")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.HasIndex("Buyerid");

                    b.HasIndex("Sellerid");

                    b.ToTable("OrderTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.ProductDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<double>("AmountperKG")
                        .HasColumnType("double precision");

                    b.Property<string>("Harvesteddate")
                        .HasColumnType("text");

                    b.Property<string>("Productimage")
                        .HasColumnType("text");

                    b.Property<string>("Productname")
                        .HasColumnType("text");

                    b.Property<int>("Sellerid")
                        .HasColumnType("integer");

                    b.Property<double>("Totalquantity")
                        .HasColumnType("double precision");

                    b.Property<string>("Updateddate")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Sellerid");

                    b.ToTable("ProductTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.ProductReviews", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<bool>("AlreadyGiven")
                        .HasColumnType("boolean");

                    b.Property<string>("Comments")
                        .HasColumnType("text");

                    b.Property<int>("Sellerid")
                        .HasColumnType("integer");

                    b.Property<int>("buyerid")
                        .HasColumnType("integer");

                    b.Property<int>("rating")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("Sellerid");

                    b.HasIndex("buyerid");

                    b.ToTable("ProductReviewsTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.SellerDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<bool>("Approved")
                        .HasColumnType("boolean");

                    b.Property<string>("Leaderaadharnumber")
                        .HasColumnType("text");

                    b.Property<string>("Leaderaddress")
                        .HasColumnType("text");

                    b.Property<string>("Leaderemail")
                        .HasColumnType("text");

                    b.Property<string>("Leadername")
                        .HasColumnType("text");

                    b.Property<string>("Leaderphone")
                        .HasColumnType("text");

                    b.Property<string>("Organizationaddress")
                        .HasColumnType("text");

                    b.Property<string>("Organizationname")
                        .HasColumnType("text");

                    b.Property<string>("Organizationpassword")
                        .HasColumnType("text");

                    b.Property<string>("Organizationphonenumber")
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("SellerTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.WishlistDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Buyerid")
                        .HasColumnType("integer");

                    b.Property<int>("Landid")
                        .HasColumnType("integer");

                    b.Property<int>("Sellerid")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("Buyerid");

                    b.HasIndex("Landid");

                    b.HasIndex("Sellerid");

                    b.ToTable("WishlistTable");
                });

            modelBuilder.Entity("AgricultureProject.Model.CartDetails", b =>
                {
                    b.HasOne("AgricultureProject.Model.BuyerDetails", "Buyer")
                        .WithMany()
                        .HasForeignKey("Buyerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AgricultureProject.Model.ProductDetails", "Product")
                        .WithMany()
                        .HasForeignKey("Productid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AgricultureProject.Model.SellerDetails", "Seller")
                        .WithMany()
                        .HasForeignKey("Sellerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Buyer");

                    b.Navigation("Product");

                    b.Navigation("Seller");
                });

            modelBuilder.Entity("AgricultureProject.Model.LandDetails", b =>
                {
                    b.HasOne("AgricultureProject.Model.SellerDetails", "Seller")
                        .WithMany()
                        .HasForeignKey("Sellerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Seller");
                });

            modelBuilder.Entity("AgricultureProject.Model.OrderDetails", b =>
                {
                    b.HasOne("AgricultureProject.Model.BuyerDetails", "Buyer")
                        .WithMany()
                        .HasForeignKey("Buyerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AgricultureProject.Model.SellerDetails", "Seller")
                        .WithMany()
                        .HasForeignKey("Sellerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Buyer");

                    b.Navigation("Seller");
                });

            modelBuilder.Entity("AgricultureProject.Model.ProductDetails", b =>
                {
                    b.HasOne("AgricultureProject.Model.SellerDetails", "Seller")
                        .WithMany()
                        .HasForeignKey("Sellerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Seller");
                });

            modelBuilder.Entity("AgricultureProject.Model.ProductReviews", b =>
                {
                    b.HasOne("AgricultureProject.Model.SellerDetails", "Seller")
                        .WithMany()
                        .HasForeignKey("Sellerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AgricultureProject.Model.BuyerDetails", "Buyer")
                        .WithMany()
                        .HasForeignKey("buyerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Buyer");

                    b.Navigation("Seller");
                });

            modelBuilder.Entity("AgricultureProject.Model.WishlistDetails", b =>
                {
                    b.HasOne("AgricultureProject.Model.BuyerDetails", "Buyer")
                        .WithMany()
                        .HasForeignKey("Buyerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AgricultureProject.Model.LandDetails", "Land")
                        .WithMany()
                        .HasForeignKey("Landid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AgricultureProject.Model.SellerDetails", "Seller")
                        .WithMany()
                        .HasForeignKey("Sellerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Buyer");

                    b.Navigation("Land");

                    b.Navigation("Seller");
                });
#pragma warning restore 612, 618
        }
    }
}