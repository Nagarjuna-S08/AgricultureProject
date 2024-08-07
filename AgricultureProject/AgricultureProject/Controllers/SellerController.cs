using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AgricultureProject.Services.MasterServices;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AgricultureProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly IMasterService<SellerDetails> _masterService;
        private readonly IsellerSerevice _sellerService;
        private readonly IMapper _mapper;

        public SellerController(IMasterService<SellerDetails> masterService, IsellerSerevice sellerservice, IMapper mapper)
        {
            _mapper = mapper;
            _sellerService = sellerservice;
            _masterService = masterService;
        }

        [HttpGet]
        public async Task<ActionResult<List<SellerDetails>>> GetAll()
        {
            var result = await _masterService.GetAllAsyn();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }


        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<SellerDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Id == Id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }






        [HttpPost]
        public async Task<IActionResult> CreateProduct(SellerCreate Buyer)
        {
            if (Buyer == null)
            {
                return BadRequest();
            }
            await _sellerService.ProductCreate(Buyer);
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
        public async Task<IActionResult> ProductUpdate([FromBody]SellerUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _sellerService.Update(dtoupdate, Id);
            return Ok(dtoupdate);
        }

    }
}
