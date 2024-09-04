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
        private readonly IWebHostEnvironment _environment;

        public ProductService(DbConnection con,IMapper map, IWebHostEnvironment environment)
        {
            _connection = con;
            _mapper = map;
            _environment = environment;

        }

        public async Task<int> ProductCreate(ProductCreate product)
        {
            var result = _mapper.Map<ProductDetails>(product);
            await _connection.ProductTable.AddAsync(result);
            await SaveChanges();

            return result.Id;
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



        private string GetFilePath(string filename)
        {

            return System.IO.Path.Combine(this._environment.WebRootPath, "ProductPhotos", filename);
        }

        public async Task<string> FileUpload(IFormFile source)
        {
            string imageUrlForLink = "";
            try
            {
                if (source != null && source.Length > 0)
                {
                    // Generate unique file name
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(source.FileName);

                    // Get the path for saving the file
                    string filePath = GetFilePath(fileName);

                    // Ensure the directory exists
                    string directory = Path.GetDirectoryName(filePath);
                    if (!Directory.Exists(directory))
                    {
                        Directory.CreateDirectory(directory);
                    }

                    // Save the file
                    using (FileStream stream = new FileStream(filePath, FileMode.Create))
                    {
                        await source.CopyToAsync(stream);
                    }

                    // Construct the relative URL for the image
                    imageUrlForLink = $"https://localhost:7218/ProductPhotos/{fileName}";
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions
                return "Can't upload the file";
            }

            return imageUrlForLink;
        }

        public async Task DeleteFile(int Id)
        {
            var source = _connection.ProductTable.Find(Id);

            if (source != null)
            {
                string[] result = source.Productimage.Split('/');

                string filePath = GetFilePath(result[result.Length - 1]);

                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
            }
        }


        public async Task updateFile(fileuploadDto fileuploadDto, int Id)
        {
            var result = await _connection.ProductTable.FindAsync(Id);
            result.Productimage = fileuploadDto.Landphoto1;
            _connection.ProductTable.Update(result);
            await SaveChanges();
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
