using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;

namespace AgricultureProject.Services
{
    public class WishlistService : IWishlistService
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public WishlistService(DbConnection connection, IMapper mapper)
        {
            _connection = connection;
            _mapper = mapper;
        }

        public async Task ProductCreate(WishlistCreate wishlist)
        {
            var result = _mapper.Map<WishlistDetails>(wishlist);
            await _connection.WishlistTable.AddAsync(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(WishListUpdate wishList, int Id)
        {

            var result = await _connection.WishlistTable.FindAsync(Id);
            result.Buyerid = wishList.BuyerId;
            result.Landid = wishList.Landid;
            _connection.WishlistTable.Update(result);
            await SaveChanges();
        }
    }
}
