using AgricultureProject.DTO;
using AgricultureProject.Model;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace AgricultureProject.Services.IServices
{
    public interface IproductService
    {
        Task ProductCreate(ProductCreate product);
        Task Update(ProductUpdate product,int Id);
        Task<string> FileUpload(IFormFile file);
        Task updateFile(fileuploadDto fileuploadDto, int Id);
        Task SaveChanges();
    }
}
