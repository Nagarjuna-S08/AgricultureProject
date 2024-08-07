using AgricultureProject.Model;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.DTO
{
    public class OrderCreate
    {
        public int Sellerid { get; set; }
        public int Buyerid { get; set; }
        public string Productids { get; set; }
        public string ProductNames { get; set; }

        public double Quantity { get; set; }
        public double Totalamount { get; set; }
        public string Delivarydate { get; set; }
        public string Paymentmethod { get; set; }
        public string Paymentdate { get; set; }
        public string Status { get; set; }
    }
}
