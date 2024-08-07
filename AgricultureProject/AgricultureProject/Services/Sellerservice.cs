using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;

namespace AgricultureProject.Services
{
    public class Sellerservice : IsellerSerevice
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public Sellerservice(DbConnection connection, IMapper mapper)
        {
            _connection = connection;
            _mapper = mapper;
        }

        public async Task ProductCreate(SellerCreate seller)
        {
            var result = _mapper.Map<SellerDetails>(seller);
            await _connection.SellerTable.AddAsync(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(SellerUpdate seller, int Id)
        {

            var result = await _connection.SellerTable.FindAsync(Id);
            result.Leaderemail = seller.Leaderemail;
            result.Leaderaadharnumber = seller.Leaderaadharnumber;
            result.Leadername = seller.Leadername;
            result.Leaderaddress = seller.Leaderaddress;
            result.Leaderphone = seller.Leaderphone;
            result.Approved= seller.Approved;
            _connection.SellerTable.Update(result);
            await SaveChanges();
        }
    }
}
