using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace AgricultureProject.Services
{
    public class LandService : IlandService
    {
        private readonly IMapper _mapper;
        private readonly DbConnection _connection;
        private readonly IWebHostEnvironment _environment;
        public LandService(DbConnection connection,IMapper mapper,IWebHostEnvironment environment)
        {
            _connection = connection;  
            _mapper = mapper;
            _environment = environment;
        }


        private string GetFilePath(string filename)
        {

            return System.IO.Path.Combine(this._environment.WebRootPath, "LandsPhotos", filename);
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
                    imageUrlForLink = $"https://localhost:7218/LandsPhotos/{fileName}";
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions
                return "Can't upload the file";
            }

            return imageUrlForLink;
        }

        public async Task<int> ProductCreate(LandCreate product)
        {
            var result = _mapper.Map<LandDetails>(product);
            await _connection.LandTable.AddAsync(result);
            await SaveChanges();

            return result.Id;
        }

        public async Task SaveChanges()
        {
            await _connection.SaveChangesAsync();
        }

        public async Task Update(LandUpdate product, int Id)
        {

            var result = await _connection.LandTable.FindAsync(Id);
            result.Landprice = product.Landprice;
            result.Landarea = product.Landarea;
            result.Landaddress = product.Landaddress;
            result.Ownername = product.Ownername;
            result.Updateddate = product.Updateddate;
            _connection.LandTable.Update(result);
            await SaveChanges();
        }

        public async Task updateFile(fileuploadDto fileuploadDto, int Id)
        {
            var result = await _connection.LandTable.FindAsync(Id);
            result.Landphoto1 = fileuploadDto.Landphoto1;
            _connection.LandTable.Update(result);
            await SaveChanges();
        }


        //public async Task Delete(int Id)
        //{
        //    var data = await _connection.LandTable.FindAsync(Id);
        //    _connection.Remove(data);
        //    await SaveChanges();

        //}

        //public async Task<List<LandCreate>> GetAllAsyn(Expression<Func<LandDetails, bool>> filter = null)
        //{
        //    IQueryable<LandDetails> query = _connection.LandTable;
        //    if(filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var result = _mapper.Map<List<LandCreate>>(query);
        //    return result;
        //}

        //public async Task<List<LandCreate>> GetAsyn(Expression<Func<LandDetails, bool>> filter = null)
        //{
        //   IQueryable<LandDetails> query = _connection.LandTable;
        //    if(filter != null)
        //    {
        //        query = query.Where(filter);
        //    }
        //    var result = _mapper.Map<List<LandCreate>>(query);
        //    return result;
        //}

    }
}
