using System.ComponentModel.DataAnnotations;

namespace AgricultureProject.Model
{
    public class BuyerDetails
    {
        [Key]
        public int Id {  get; set; }
        public string Buyername { get; set; }
        public string email {  get; set; }  
        public string Buyeraddress { get; set;}
        public string Buyerphonenumber { get; set;}
        public string Buyerpassword { get; set; }
    }
}
