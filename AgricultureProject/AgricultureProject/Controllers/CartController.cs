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
    public class CartController : ControllerBase
    {
        private readonly IMasterService<CartDetails> _masterService;
        private readonly ICartService _cartService;
        private readonly IMapper _mapper;

        public CartController(IMasterService<CartDetails> masterService, ICartService cartservice, IMapper mapper)
        {
            _mapper = mapper;
            _cartService = cartservice;
            _masterService = masterService;
        }

        [HttpGet]
        public async Task<ActionResult<List<CartDetails>>> GetAll()
        {
            var result = await _masterService.GetAllAsyn(includeProperties: "Seller,Buyer,Product");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<CartDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Id == Id, includeProperties: "Seller,Buyer,Product");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("BuyerCart/{Id:int}")]
        public async Task<ActionResult<List<CartDetails>>> GetBuyerCart(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Buyerid == Id, includeProperties: "Seller,Buyer,Product");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct(CartCreate Cart)
        {
            if (Cart == null)
            {
                return BadRequest();
            }
            await _cartService.ProductCreate(Cart);
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
            return Ok();
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> ProductUpdate([FromBody]CartUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _cartService.Update(dtoupdate, Id);
            return Ok();
        }
    }
}
