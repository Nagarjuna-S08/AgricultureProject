using AgricultureProject.DTO;

namespace AgricultureProject.Services.IServices
{
    public interface ICartService
    {
        Task ProductCreate(CartCreate cart);
        Task Update(CartUpdate cart, int Id);
        Task SaveChanges();
    }
}
