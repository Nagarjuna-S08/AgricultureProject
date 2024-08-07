
using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Expressions;

namespace AgricultureProject.Services.MasterServices
{
    public class MasterService <T> : IMasterService<T> where T:class
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        internal DbSet<T> _DbSet;
        public MasterService(IMapper mapper,DbConnection connection)
        {
            _connection = connection;
            _mapper = mapper;   
            _DbSet = _connection.Set<T>();
        }

        public async Task Delete(int Id)
        {
            var data = await _DbSet.FindAsync(Id);
            _connection.Remove(data);
            await SaveChanges();
        }

        public async Task<List<T>> GetAllAsyn(Expression<Func<T, bool>> filter = null, string includeProperties = "")
        {
            IQueryable<T> query = _DbSet;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            foreach (var includeProperty in includeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }
            //var details = await query.ToListAsync();
            //var result = _mapper.Map<List<ProductCreate>>(details);
            return await query.ToListAsync();
        }

        public async Task<List<T>> GetAsyn(Expression<Func<T, bool>> filter = null, string includeProperties = "")
        {
            IQueryable<T> query = _DbSet;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            foreach (var includeProperty in includeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }
            //var details = await query.ToListAsync();
            //var result = _mapper.Map<List<ProductCreate>>(details);
            return await query.ToListAsync();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }
    }
}
