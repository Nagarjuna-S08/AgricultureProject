using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;

namespace AgricultureProject.Services
{
    public class CartService : ICartService
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public CartService(DbConnection connection, IMapper mapper)
        {
            _connection = connection;
            _mapper = mapper;
        }

        public async Task ProductCreate(CartCreate cart)
        {
            var result = _mapper.Map<CartDetails>(cart);
            var alreadyExist = _connection.CartTable.FirstOrDefault(x => x.Sellerid == result.Sellerid && x.Buyerid == result.Buyerid);
            if (alreadyExist != null)
            {

                throw new Exception("The Item is  already exists in the Cart.");

            }
            else
            {
                await _connection.CartTable.AddAsync(result);
                await SaveChanges();
            }
            
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(CartUpdate cart, int Id)
        {

            var result = await _connection.CartTable.FindAsync(Id);
            result.Quantity = cart.Quantity;
            result.Totalamount = cart.Totalamount;
            _connection.CartTable.Update(result);
            await SaveChanges();
        }
    }
}
