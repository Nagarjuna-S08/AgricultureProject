using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.Model
{
    public class OrderDetails
    {
        public int Id { get; set; }

        [ForeignKey("Seller")]
        public int Sellerid { get; set; }
        public SellerDetails Seller { get; set; }

        [ForeignKey("Buyer")]
        public int Buyerid { get; set; }
        public BuyerDetails Buyer { get; set; }

        public string Productids {  get; set; }
        public string ProductNames { get; set; }

        public double Quantity { get; set; }
        public double Totalamount { get; set; }
        public string Delivarydate {  get; set; }   
        public string Paymentmethod {  get; set; }
        public string Paymentdate { get; set; }
        public string Status { get; set;}
        public string ProductAmount { get; set; }
        public string productQuantities { get; set; }
        public bool AcceptCheck { get; set; } = false;
    }
}
