using System.ComponentModel.DataAnnotations;

namespace AgricultureProject.Model
{
    public class SellerDetails
    {
        [Key]
        public int Id { get; set; }
        public string Organizationname { get; set; }
        public string email { get; set; }
        public string Organizationaddress { get; set; }
        public string Organizationphonenumber { get; set; }
        public string Organizationpassword { get; set; }

        public string Leadername {  get; set; }
        public string Leaderaadharnumber { get; set; }
        public string Leaderaddress { get; set;}
        public string Leaderphone { get; set;}
        public string Leaderemail {  get; set; }


        public bool Approved { get; set; } = false;
    }
}
