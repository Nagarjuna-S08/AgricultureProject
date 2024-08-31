using System.ComponentModel.DataAnnotations.Schema;

namespace AgricultureProject.Model
{
    public class LandDetails
    {
        public int Id {  get; set; }

        [ForeignKey("Seller")]
        public int Sellerid {  get; set; }
        public SellerDetails Seller { get; set; }

        public string Ownername { get; set; }
        public double Landarea {  get; set; }   
        public double Landprice { get; set; }
        public string Landaddress{get; set;}
        public string Updateddate {  get; set; }
        public string Landphoto1 { get; set; }

    }
}
