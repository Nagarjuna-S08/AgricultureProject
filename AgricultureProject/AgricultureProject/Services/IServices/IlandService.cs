using AgricultureProject.DTO;
using AgricultureProject.Model;
using System.Linq.Expressions;

namespace AgricultureProject.Services.IServices
{
    public interface IlandService
    {
        Task<int> ProductCreate(LandCreate product);
        Task Update(LandUpdate product, int Id);

        Task<string> FileUpload(IFormFile file);

        Task updateFile(fileuploadDto  fileuploadDto, int Id);
        Task SaveChanges();
    }
}
