using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.Model
{
    public class ProductReviews
    {
        public int Id { get; set; }
        [ForeignKey("Seller")]
        public int Sellerid { get; set; }
        public SellerDetails Seller { get; set; }

        [ForeignKey("Buyer")]
        public int buyerid {  get; set; }
        public BuyerDetails Buyer { get; set; } 

        public int rating {  get; set; }
        public string Comments { get; set; }
        public bool AlreadyGiven {  get; set; }
    }
}
