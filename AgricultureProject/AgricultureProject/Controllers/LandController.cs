using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services;
using AgricultureProject.Services.IServices;
using AgricultureProject.Services.MasterServices;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AgricultureProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LandController : ControllerBase
    {
        private readonly IMasterService<LandDetails> _masterService;
        private readonly IlandService _landService;
        private readonly IMapper _mapper;

        public LandController(IMasterService<LandDetails> masterService,IlandService landservice,IMapper mapper)
        {
            _mapper = mapper;
            _landService=landservice;
            _masterService=masterService;
        }

        [HttpGet]
        public async Task<ActionResult<List<LandDetails>>> GetAll()
        {
            var result =await _masterService.GetAllAsyn(includeProperties: "Seller");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("SellerLand/{id:int}")]
        public async Task<ActionResult<List<LandDetails>>> GetSellerLand(int id)
        {
            var result = await _masterService.GetAllAsyn(i=>i.Sellerid==id,includeProperties: "Seller");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }


        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<LandDetails>>> GetOne(int Id)
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
        public async Task<ActionResult<int>> CreateProduct(LandCreate Land)
        {
            if (Land == null)
            {
                return BadRequest(-1);
            }
            int id = await _landService.ProductCreate(Land);
            return Ok(id);
        }





        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteProduct(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            await _landService.DeleteFile(Id);
            await _masterService.Delete(Id);
            return Ok();
        }




        [HttpPut("{Id:int}")]
        public async Task<IActionResult> ProductUpdate([FromBody]LandUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _landService.Update(dtoupdate, Id);
            return Ok(dtoupdate);
        }



        //Custom api for specialized page in frontend (Land Page)

        [HttpGet("Filter/Budget/{minBudget:int}/{maxBudget:int}/{minArea:int}/{maxArea:int}/{Locality}")]
        public async Task<ActionResult> DataBugetFilter(int minBudget, int maxBudget,int minArea, int maxArea, string Locality)
        {
            var result = await _masterService.GetAllAsyn(i => (i.Landprice >= minBudget && i.Landprice <= maxBudget) && (i.Landarea >= minArea && i.Landarea <= maxArea) && (i.Landaddress.Contains(Locality)) );
            return Ok(result);
        }



        [HttpPut("ImageUpload/{landid:int}")]
        public async Task<ActionResult> FileUpload(IFormFile source, int landid)
        {
            var link =await  _landService.FileUpload(source);
            fileuploadDto ld = new fileuploadDto()
            {
                Landphoto1 = link
            };
            await _landService.updateFile(ld, landid);
            return Ok(new { Message = "Successfully added", Link = link });
        }

    }
}
