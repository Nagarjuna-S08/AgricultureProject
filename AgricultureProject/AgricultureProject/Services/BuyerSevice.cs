using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;
using System.Linq.Expressions;

namespace AgricultureProject.Services
{
    public class BuyerSevice : IBuyerService
    {

        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public BuyerSevice(DbConnection connection, IMapper mapper)
        {
            _connection = connection;
            _mapper = mapper;
        }
       
        public async Task ProductCreate(BuyerCreate buyer)
        {
            var result = _mapper.Map<BuyerDetails>(buyer);
            await _connection.BuyerTable.AddAsync(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(BuyerUpdate buyer, int Id)
        {

            var result = await _connection.BuyerTable.FindAsync(Id);
            result.Buyername = buyer.Buyername;
            result.email = buyer.email;
            result.Buyeraddress = buyer.Buyeraddress;
            result.Buyerphonenumber = buyer.Buyerphonenumber;
            result.Buyerpassword = buyer.Buyerpassword;
            _connection.BuyerTable.Update(result);
            await SaveChanges();
        }
        //public async Task Delete(int Id)
        //{
        //    var data = await _connection.LandTable.FindAsync(Id);
        //    _connection.Remove(data);
        //    await SaveChanges();

        //}

        //public async Task<List<BuyerCreate>> GetAllAsyn(Expression<Func<BuyerDetails, bool>> filter = null)
        //{
        //    IQueryable<BuyerDetails> query = _connection.BuyerTable;
        //    if (filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var result = _mapper.Map<List<BuyerCreate>>(query);
        //    return result;
        //}

        //public async Task<List<BuyerCreate>> GetAsyn(Expression<Func<BuyerDetails, bool>> filter = null)
        //{
        //    IQueryable<BuyerDetails> query = _connection.BuyerTable;
        //    if (filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var result = _mapper.Map<List<BuyerCreate>>(query);
        //    return result;
        //}

    }
}
