using AgricultureProject.DTO;
using AgricultureProject.Model;
using System.Linq.Expressions;

namespace AgricultureProject.Services.IServices
{
    public interface IlandService
    {
        Task ProductCreate(LandCreate product);
        Task Update(LandUpdate product, int Id);
        Task SaveChanges();
    }
}
