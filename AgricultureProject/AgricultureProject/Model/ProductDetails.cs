using Microsoft.EntityFrameworkCore.ValueGeneration;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.Model
{
    public class ProductDetails
    {
        public int Id { get; set; }
        public string Productname { get; set; }

        [ForeignKey("Seller")]
        public int Sellerid { get; set; }
        public SellerDetails Seller { get; set; }

        public double Totalquantity {  get; set; }
        public double AmountperKG { get; set; }
        public string Harvesteddate { get; set; } 
        public string Updateddate { get; set; }
        public byte[] Productimage { get; set; }

    }
}
