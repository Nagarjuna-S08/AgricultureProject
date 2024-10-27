using System.ComponentModel.DataAnnotations;

namespace AgricultureProject.Model
{
    public class AdminDetails
    {
        [Key]
        public int Id { get; set; }
        public string AdminName { get; set; }
        public string email { get; set; }
    }
}
