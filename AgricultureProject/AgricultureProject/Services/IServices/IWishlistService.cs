using AgricultureProject.DTO;

namespace AgricultureProject.Services.IServices
{
    public interface IWishlistService
    {
        Task ProductCreate(WishlistCreate wishlist);
        Task Update(WishListUpdate wishList, int Id);
        Task SaveChanges();
    }
}
