using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;

namespace AgricultureProject.Services
{
    public class Orderservice : IOrderService
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public Orderservice(DbConnection connection, IMapper mapper)
        {
            _connection = connection;
            _mapper = mapper;
        }

        public async Task ProductCreate(OrderDetails order)
        {
            var result = order ;
            await _connection.OrderTable.AddAsync(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(OrderUpdate order, int Id)
        {

            var result = await _connection.OrderTable.FindAsync(Id);
            result.Delivarydate = order.Delivarydate;
            result.Status = order.Status;
            _connection.OrderTable.Update(result);
            await SaveChanges();
        }
    }
}
