using AgricultureProject.Model;
using Microsoft.EntityFrameworkCore;

namespace AgricultureProject.AppDbContext
{
    public class DbConnection : DbContext
    {
        public DbConnection(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<BuyerDetails> BuyerTable { get; set; }
        public DbSet<SellerDetails> SellerTable { get; set;}
        public DbSet<LandDetails> LandTable { get; set; }
        public DbSet<ProductDetails> ProductTable { get; set; }
        public DbSet<CartDetails> CartTable { get; set; }
        public DbSet<WishlistDetails> WishlistTable { get; set;}
        public DbSet<OrderDetails> OrderTable { get; set; }
        public DbSet<ProductReviews> ProductReviewsTable { get; set; }

        public DbSet<AdminDetails> AdminDetailsTable { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LandDetails>()
                .HasOne(ld => ld.Seller)
                .WithMany()
                .HasForeignKey(id => id.Sellerid);

            modelBuilder.Entity<ProductDetails>()
                .HasOne(id => id.Seller)
                .WithMany()
                .HasForeignKey(id => id.Sellerid);

            modelBuilder.Entity<CartDetails>()
                .HasOne(cd => cd.Seller)
                .WithMany()
                .HasForeignKey(cd => cd.Sellerid);

            modelBuilder.Entity<CartDetails>()
                .HasOne(cd => cd.Buyer)
                .WithMany()
                .HasForeignKey(cd => cd.Buyerid);

            modelBuilder.Entity<CartDetails>()
                .HasOne(cd => cd.Product)
                .WithMany()
                .HasForeignKey(cd => cd.Productid);

            modelBuilder.Entity<OrderDetails>()
                .HasOne(od => od.Seller)
                .WithMany()
                .HasForeignKey(od => od.Sellerid);

            modelBuilder.Entity<OrderDetails>()
                .HasOne(od=>od.Buyer)
                .WithMany()
                .HasForeignKey(od=>od.Buyerid);

            modelBuilder.Entity<WishlistDetails>()
                .HasOne(od => od.Buyer)
                .WithMany()
                .HasForeignKey(wh => wh.Buyerid);

            modelBuilder.Entity<WishlistDetails>()
               .HasOne(od => od.Land)
               .WithMany()
               .HasForeignKey(wh => wh.Landid);


            modelBuilder.Entity<ProductReviews>()
              .HasOne(pr => pr.Seller)
              .WithMany()
              .HasForeignKey(pr=>pr.Sellerid);

            base.OnModelCreating(modelBuilder);
        }

        
    }
}
