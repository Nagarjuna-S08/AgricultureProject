using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.Model
{
    public class CartDetails
    {
        public int Id {  get; set; }

        [ForeignKey("Seller")]
        public int Sellerid { get; set; }
        public SellerDetails Seller { get; set; }

        [ForeignKey("Buyer")]
        public int Buyerid {  get; set; }
        public BuyerDetails Buyer { get; set; }

        [ForeignKey("Product")]
        public int Productid { get; set; }
        public ProductDetails Product { get; set; }

        public double Quantity {  get; set; }
        public double Totalamount { get; set; }
    }
}
