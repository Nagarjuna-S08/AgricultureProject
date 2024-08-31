using AgricultureProject.Model;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.DTO
{
    public class ProductCreate
    {
        public string Productname { get; set; }
        public int Sellerid { get; set; }
        public double Totalquantity { get; set; }
        public double AmountperKG { get; set; }
        public string Harvesteddate { get; set; }
        public string Updateddate { get; set; }

        public string Productimage { get; set; }

    }
}
