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
        public byte[] LAndphoto1 { get; set; }
        public byte[] LAndphoto2 { get; set; }
        public byte[] LAndphoto3 { get; set; }
        public byte[] LAndphoto4 { get; set; }
        public byte[] LAndphoto5 { get; set; }


    }
}
