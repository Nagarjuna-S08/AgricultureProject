using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace AgricultureProject.Services
{
    public class ProductService : IproductService
    {
        private readonly DbConnection _connection;
        private readonly IMapper _mapper;

        public ProductService(DbConnection con,IMapper map)
        {
            _connection=con;
            _mapper = map;
        }

        public async Task ProductCreate(ProductCreate product)
        {
            var result = _mapper.Map<ProductDetails>(product);
            await _connection.ProductTable.AddAsync(result);
            await SaveChanges();

        }


        public async Task Update(ProductUpdate product, int Id)
        {
            var result = await _connection.ProductTable.FindAsync(Id);
            result.Productname = product.Productname;
            result.Totalquantity = product.Totalquantity;
            result.AmountperKG = product.AmountperKG;
            result.Harvesteddate = product.Harvesteddate;
            result.Updateddate = product.Updateddate;
            _connection.ProductTable.Update(result);
            await SaveChanges();
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }





        //public async Task<List<ProductCreate>> GetAllAsyn(Expression<Func<ProductDetails, bool>> filter = null)
        //{

        //    IQueryable<ProductDetails> query = _connection.ProductTable; 
        //    if(filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var details = await query.ToListAsync();
        //    var result = _mapper.Map<List<ProductCreate>>(details);
        //    return result;
        //}

        //public async Task<List<ProductCreate>> GetAsyn(Expression<Func<ProductDetails, bool>> filter = null)
        //{
        //    IQueryable<ProductDetails> query = _connection.ProductTable;

        //    if(query != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var detail =await query.ToListAsync(); 

        //    var result=_mapper.Map<List<ProductCreate>>(detail);

        //    return result;
        //}


        //public async Task Delete(int Id)
        //{
        //    var data =await _connection.ProductTable.FindAsync(Id);
        //    _connection.Remove(data);
        //    await SaveChanges();
        //}

    }
}
