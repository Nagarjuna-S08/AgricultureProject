using AgricultureProject.DTO;
using AgricultureProject.Model;

namespace AgricultureProject.Services.IServices
{
    public interface IAdminService
    {
        Task ProductCreate(AdminDetails adminDetails);
        Task Update(AdminDetails adminDetails, int Id);
        Task SaveChanges();
    }
}
