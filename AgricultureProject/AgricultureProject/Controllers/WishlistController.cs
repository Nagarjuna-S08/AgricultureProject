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
    public class WishlistController : ControllerBase
    {
        private readonly IMasterService<WishlistDetails> _masterService;
        private readonly IWishlistService _wishlistService;
        private readonly IMapper _mapper;

        public WishlistController(IMasterService<WishlistDetails> masterService, IWishlistService wishlistService, IMapper mapper)
        {
            _mapper = mapper;
            _wishlistService = wishlistService;
            _masterService = masterService;
        }

        [HttpGet]
        public async Task<ActionResult<List<WishlistDetails>>> GetAll()
        {
            var result = await _masterService.GetAllAsyn(includeProperties: "Buyer,Land");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }


        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<WishlistDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Id == Id, includeProperties: "Buyer,land");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }






        [HttpPost]
        public async Task<IActionResult> CreateProduct(WishlistCreate Wishlist)
        {
            if (Wishlist == null)
            {
                return BadRequest();
            }
            await _wishlistService.ProductCreate(Wishlist);
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
        public async Task<IActionResult> ProductUpdate([FromBody]WishListUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _wishlistService.Update(dtoupdate, Id);
            return Ok(dtoupdate);
        }

    }
}
