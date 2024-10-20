using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services.IServices;
using AgricultureProject.Services.MasterServices;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AgricultureProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IMasterService<BuyerDetails> _masterService;
        private readonly IBuyerService _buyerService;
        private readonly IMapper _mapper;

        public BuyerController(IMasterService<BuyerDetails> masterService, IBuyerService buyerservice, IMapper mapper)
        {
            _mapper = mapper;
            _buyerService = buyerservice;
            _masterService = masterService;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<List<BuyerDetails>>> GetAll()
        {
            var result = await _masterService.GetAllAsyn();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }


        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<BuyerDetails>>> GetOne(int Id)
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
        public async Task<ActionResult> CreateProduct(BuyerCreate Buyer)
        {
            if (Buyer == null)
            {
                return BadRequest("Invalid buyer data.");
            }

            var matches = await _masterService.GetAllAsyn(i => i.email == Buyer.email, "");

            if (matches.Any())
            {
                return BadRequest("User already exists.");
            }
            await _buyerService.ProductCreate(Buyer);
            return Ok();
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
        public async Task<IActionResult> ProductUpdate([FromBody] BuyerUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _buyerService.Update(dtoupdate, Id);
            return Ok(dtoupdate);
        }






    }
}
