using AgricultureProject.DTO;
using AgricultureProject.Model;
using System.Linq.Expressions;

namespace AgricultureProject.Services.IServices
{
    public interface IsellerSerevice
    {
        Task ProductCreate(SellerCreate seller);
        Task Update(SellerUpdate seller, int Id);
        Task SaveChanges();
    }
}
