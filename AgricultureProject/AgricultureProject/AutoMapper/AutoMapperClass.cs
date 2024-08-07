using AgricultureProject.DTO;
using AgricultureProject.Model;
using AutoMapper;

namespace AgricultureProject.AutoMapper
{
    public class AutoMapperClass : Profile
    {
        public AutoMapperClass()
        {

            CreateMap<ProductUpdate, ProductDetails>().ReverseMap();
            CreateMap<ProductCreate, ProductDetails>().ReverseMap();

            CreateMap<LandCreate, LandDetails>().ReverseMap();
            CreateMap<LandUpdate, LandDetails>().ReverseMap();

            CreateMap<CartCreate, CartDetails>().ReverseMap();
            CreateMap<CartUpdate, CartDetails>().ReverseMap();

            CreateMap<SellerCreate, SellerDetails>().ReverseMap();  
            CreateMap<SellerUpdate, SellerDetails>().ReverseMap();

            CreateMap<BuyerCreate, BuyerDetails>().ReverseMap();    
            CreateMap<BuyerUpdate, BuyerDetails>().ReverseMap();    

            CreateMap<WishlistCreate,WishlistDetails>().ReverseMap();
            CreateMap<WishListUpdate, WishlistDetails>().ReverseMap();

            CreateMap<OrderCreate, OrderDetails>().ReverseMap();
            CreateMap<OrderUpdate, OrderDetails>().ReverseMap();    

            

        }
    }
}
