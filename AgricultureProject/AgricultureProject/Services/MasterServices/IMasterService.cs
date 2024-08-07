using AgricultureProject.DTO;
using AgricultureProject.Model;
using System.Linq.Expressions;

namespace AgricultureProject.Services.MasterServices
{
    public interface IMasterService<T> where T : class
    {
        Task<List<T>> GetAllAsyn(Expression<Func<T, bool>> filter = null , string includeProperties = "");
        Task<List<T>> GetAsyn(Expression<Func<T, bool>> filter = null ,string includeProperties = "");
        Task Delete(int Id);
        Task SaveChanges();
    }
}
