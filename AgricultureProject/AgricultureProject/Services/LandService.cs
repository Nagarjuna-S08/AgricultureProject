using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;
using System.Linq.Expressions;

namespace AgricultureProject.Services
{
    public class LandService : IlandService
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public LandService(DbConnection connection,IMapper mapper)
        {
            _connection = connection;  
            _mapper = mapper;
        }
        
        public async Task ProductCreate(LandCreate product)
        {
            var result = _mapper.Map<LandDetails>(product);
            await _connection.LandTable.AddAsync(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(LandUpdate product, int Id)
        {

            var result = await _connection.LandTable.FindAsync(Id);
            result.Landprice = product.Landprice;
            result.Landarea = product.Landarea;
            result.Landaddress = product.Landaddress;
            result.Ownername = product.Ownername;
            result.Updateddate = product.Updateddate;
            _connection.LandTable.Update(result);
            await SaveChanges();
        }


        //public async Task Delete(int Id)
        //{
        //    var data = await _connection.LandTable.FindAsync(Id);
        //    _connection.Remove(data);
        //    await SaveChanges();

        //}

        //public async Task<List<LandCreate>> GetAllAsyn(Expression<Func<LandDetails, bool>> filter = null)
        //{
        //    IQueryable<LandDetails> query = _connection.LandTable;
        //    if(filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var result = _mapper.Map<List<LandCreate>>(query);
        //    return result;
        //}

        //public async Task<List<LandCreate>> GetAsyn(Expression<Func<LandDetails, bool>> filter = null)
        //{
        //   IQueryable<LandDetails> query = _connection.LandTable;
        //    if(filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var result = _mapper.Map<List<LandCreate>>(query);
        //    return result;
        //}

    }
}
