using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.Model
{
    public class WishlistDetails
    {
        public int Id { get; set; }

        [ForeignKey("Buyer")]
        public int Buyerid { get; set; }
        public BuyerDetails Buyer { get; set; }

        [ForeignKey("Land")]
        public int Landid { get; set; }
        public LandDetails Land { get; set; }

        [ForeignKey("Seller")]
        public int Sellerid { get; set; }
        public SellerDetails Seller { get; set; }

    }
}
