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
        public async Task<IActionResult> CreateProduct(LandCreate Land)
        {
            if (Land == null)
            {
                return BadRequest();
            }
            await _landService.ProductCreate(Land);
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


    }
}
