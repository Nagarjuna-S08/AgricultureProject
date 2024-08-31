using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;

namespace AgricultureProject.Services
{
    public class ProductReviewService : IProductReviews
    {
        private readonly DbConnection _connection;
        private readonly IMapper _mapper;

        public ProductReviewService(DbConnection con, IMapper map)
        {
            _connection = con;
            _mapper = map;
        }

        public async Task ProductCreate(ProductReviewDto product)
        {
            var result = _mapper.Map<ProductReviews>(product);
            await _connection.ProductReviewsTable.AddAsync(result);
            await SaveChanges();

        }


        public async Task Update(ProductReviewDto product, int Id)
        {
            var result = await _connection.ProductReviewsTable.FindAsync(Id);
            result.rating = product.rating;
            result.Comments = product.Comments;
            result.Sellerid = product.Sellerid;
            result.buyerid = product.buyerid;   
            result.AlreadyGiven = product.AlreadyGiven;
    
            _connection.ProductReviewsTable.Update(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }
    }
}
