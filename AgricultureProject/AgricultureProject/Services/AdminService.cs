using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;

namespace AgricultureProject.Services
{
    public class AdminService : IAdminService
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        public AdminService(DbConnection connection, IMapper mapper)
        {
            _connection = connection;
            _mapper = mapper;
        }
        public async Task ProductCreate(AdminDetails admin)
        {
            await _connection.AdminDetailsTable.AddAsync(admin);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(AdminDetails admin, int Id)
        {

            var result = await _connection.AdminDetailsTable.FindAsync(Id);
            result.AdminName = admin.AdminName;
            result.email = admin.email;
            _connection.AdminDetailsTable.Update(result);
            await SaveChanges();
        }
    }
}
