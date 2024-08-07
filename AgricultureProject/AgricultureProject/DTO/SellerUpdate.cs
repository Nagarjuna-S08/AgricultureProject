namespace AgricultureProject.DTO
{
    public class SellerUpdate
    {
        public int Id { get; set; }
        public string Leadername { get; set; }
        public string Leaderaadharnumber { get; set; }
        public string Leaderaddress { get; set; }
        public string Leaderphone { get; set; }
        public string Leaderemail { get; set; }

        public bool Approved { get; set; }
    }
}
