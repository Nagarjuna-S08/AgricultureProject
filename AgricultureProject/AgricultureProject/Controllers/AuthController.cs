using AgricultureProject.DTO;
using AgricultureProject.Model;
using AgricultureProject.Services;
using AgricultureProject.Services.MasterServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AgricultureProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly TokenService _tokenService;
        private readonly IMasterService<BuyerDetails> _masterServiceBuyer;
        private readonly IMasterService<SellerDetails> _masterServiceSeller;

        public AuthController(IConfiguration configuration,IMasterService<BuyerDetails> masterServiceBuyer, IMasterService<SellerDetails> masterServiceSeller)
        {
            _tokenService = new TokenService(configuration);
            _masterServiceBuyer = masterServiceBuyer;
            _masterServiceSeller= masterServiceSeller;
        }

        [HttpPost("Login/Buyer")]
        public async Task<IActionResult> BuyerLogin([FromBody]LoginModel model)
        {
            // For demonstration, we're accepting any username and password.
            // In a real application, you should validate the user credentials from a database.
            var result =await _masterServiceBuyer.GetAsyn(i=>i.Buyername==model.Username && i.Buyerpassword==model.Password);    

            if (result.Count() != 0) // Replace with real validation
            {
                var token = _tokenService.GenerateToken(model.Username);
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost("Login/Seller")]
        public async Task<IActionResult> SellerLogin([FromBody] LoginModel model)
        {
            // For demonstration, we're accepting any username and password.
            // In a real application, you should validate the user credentials from a database.
            var result =await _masterServiceSeller.GetAsyn(i => i.Organizationname == model.Username && i.Organizationpassword == model.Password);

            if (result.Count() > 0 ) // Replace with real validation
            {
                var token = _tokenService.GenerateToken(model.Username);
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
