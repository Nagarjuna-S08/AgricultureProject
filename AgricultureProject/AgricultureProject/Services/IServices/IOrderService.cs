using AgricultureProject.DTO;
using AgricultureProject.Model;

namespace AgricultureProject.Services.IServices
{
    public interface IOrderService
    {
        Task ProductCreate(OrderDetails order);
        Task Update(OrderUpdate order, int Id);
        Task UpdateStatus(int Id,string status);
        Task SaveChanges();
    }
}
