using AgricultureProject.DTO;

namespace AgricultureProject.Services.IServices
{
    public interface IProductReviews
    {
        Task ProductCreate(ProductReviewDto product);
        Task Update(ProductReviewDto product, int Id);
        Task SaveChanges();
    }
}
