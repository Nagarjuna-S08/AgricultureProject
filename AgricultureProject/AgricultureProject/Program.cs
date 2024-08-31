using AgricultureProject.AppDbContext;
using AgricultureProject.AutoMapper;
using AgricultureProject.Model;
using AgricultureProject.Services;
using AgricultureProject.Services.IServices;
using AgricultureProject.Services.MasterServices;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();






//configuration for the DB connection
builder.Services.AddDbContext<DbConnection>(option =>
{
    option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});



//config for the AutoMapper class to use globally
builder.Services.AddAutoMapper(typeof(AutoMapperClass));



//config for the service file 
builder.Services.AddScoped<IproductService,ProductService>();
builder.Services.AddScoped<IlandService, LandService>();
builder.Services.AddScoped<IBuyerService, BuyerSevice>();
builder.Services.AddScoped<IsellerSerevice, Sellerservice>();
builder.Services.AddScoped<ICartService, CartService>();
builder.Services.AddScoped<IWishlistService, WishlistService>();
builder.Services.AddScoped<IOrderService, Orderservice>();
builder.Services.AddScoped(typeof(IMasterService<>), typeof(MasterService<>));







// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();   

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
