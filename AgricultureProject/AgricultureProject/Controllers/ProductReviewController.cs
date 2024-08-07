using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AgricultureProject.Services.MasterServices;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace AgricultureProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductReviewController : ControllerBase
    {
        private readonly IMapper _Imap;
        private readonly IProductReviews _productService;
        private readonly IMasterService<ProductReviews> _masterService;
        public ProductReviewController(IMapper map, IProductReviews productService, IMasterService<ProductReviews> masterService)
        {
            _masterService = masterService;
            _Imap = map;
            _productService = productService;
        }




        [HttpGet]
        public async Task<ActionResult<List<ProblemDetails>>> GetAll()
        {
            var result = await _masterService.GetAllAsyn(includeProperties: "Seller");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }





        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<ProblemDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Id == Id, includeProperties: "Seller");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }






        [HttpPost]
        public async Task<IActionResult> CreateProduct(ProductReviewDto product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            await _productService.ProductCreate(product);
            return Ok("Added Successfully");
        }





        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteProduct(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            await _masterService.Delete(Id);
            return Ok("Deleted Succesfully");
        }




        [HttpPut("{Id:int}")]
        public async Task<IActionResult> ProductUpdate([FromBody]ProductReviewDto dtoupdate, int Id)
        {
            //if (Id == 0 || Id != dtoupdate.Id)
            //{
            //    return BadRequest();
            //}
            await _productService.Update(dtoupdate, Id);
            return Ok(dtoupdate);
        }

    }
}
