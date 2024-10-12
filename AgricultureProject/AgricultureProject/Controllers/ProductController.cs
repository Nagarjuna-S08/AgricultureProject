using AgricultureProject.AppDbContext;
using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services;
using AgricultureProject.Services.IServices;
using AgricultureProject.Services.MasterServices;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace AgricultureProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IMapper _Imap;
        private readonly IproductService _productService;
        private readonly IMasterService<ProductDetails> _masterService;
        public ProductController(DbConnection db, IMapper map,IproductService productService,IMasterService<ProductDetails> masterService)
        {
            _masterService= masterService;
            _Imap= map;  
            _productService=productService;
        }




        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<ProblemDetails>>> GetAll()
        {
            var result =await _masterService.GetAllAsyn(includeProperties: "Seller");
            if (result==null)
            {
                return NotFound();  
            }
            return Ok(result);
        }

        [HttpGet("SellerProduct/{id:int}")]
        public async Task<ActionResult<List<ProblemDetails>>> GetSellerProduct(int id)
        {
            var result = await _masterService.GetAllAsyn(i=>i.Sellerid==id,includeProperties: "Seller");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }



        [HttpGet("Onedata/{Id:int}")]
        [Authorize]
        public async Task<ActionResult<List<ProblemDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result =await _masterService.GetAsyn(i=>i.Id==Id, includeProperties: "Seller");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }






        [HttpPost]
        [Authorize]
        public async Task<ActionResult<int>> CreateProduct(ProductCreate product) {
            if(product == null)
            {
                return BadRequest(-1);
            }
            int id = await _productService.ProductCreate(product);
            return Ok(id);
        }





        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteProduct(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            await _productService.DeleteFile(Id);
            await _masterService.Delete(Id);
            return Ok();
        }




        [HttpPut("{Id:int}")]
        public async Task<IActionResult> ProductUpdate([FromBody]ProductUpdate dtoupdate,int Id)
        {
            if(Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _productService.Update(dtoupdate,Id);
            return Ok(dtoupdate);
        }



        //Custom api for specialized page in frontend

        private DateTime ConvertToDate(string dateStr)
        {
            return DateTime.ParseExact(dateStr, "dd-MM-yyyy", CultureInfo.InvariantCulture);
        }

        [HttpGet("Filter/date")]
        public async Task<IActionResult> DateFilter()
        {
            var result = await _masterService.GetAllAsyn();
            var data = result.OrderBy(i => ConvertToDate(i.Harvesteddate)).Reverse().ToList();
            return Ok(data);
        }


        [HttpPut("ImageUpload/{productId:int}")]
        public async Task<ActionResult> FileUpload(IFormFile source, int productId)
        {
            var link = await _productService.FileUpload(source);
            fileuploadDto ld = new fileuploadDto()
            {
                Landphoto1 = link
            };
            await _productService.updateFile(ld, productId);
            return Ok(new { Message = "Successfully added", Link = link });
        }


    }
}
