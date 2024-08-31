using AgricultureProject.Model;

namespace AgricultureProject.DTO
{
    public class ProductReviewDto
    {
        public int Sellerid { get; set; }
        public int buyerid { get; set; }
        public int rating { get; set; }
        public string Comments { get; set; }
        public bool AlreadyGiven { get; set; } = false;
    }
}
