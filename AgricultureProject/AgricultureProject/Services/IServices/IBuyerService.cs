using AgricultureProject.DTO;
using AgricultureProject.Model;
using System.Linq.Expressions;

namespace AgricultureProject.Services.IServices
{
    public interface IBuyerService
    {
        Task ProductCreate(BuyerCreate buyer);
        Task Update(BuyerUpdate buyer, int Id);
        Task SaveChanges();
    }
}
