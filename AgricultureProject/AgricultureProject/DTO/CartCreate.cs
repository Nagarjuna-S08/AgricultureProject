using AgricultureProject.Model;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.DTO
{
    public class CartCreate
    {
        public int Sellerid { get; set; }
        public int Buyerid { get; set; }
        public int Productid { get; set; }
        public double Quantity { get; set; }
        public double Totalamount { get; set; }
    }
}
