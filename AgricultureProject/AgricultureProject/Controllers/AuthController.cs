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
        private readonly IMasterService<AdminDetails> _masterServiceAdmin;

        public AuthController(IConfiguration configuration,IMasterService<BuyerDetails> masterServiceBuyer, IMasterService<SellerDetails> masterServiceSeller, IMasterService<AdminDetails> masterServiceAdmin)
        {
            _tokenService = new TokenService(configuration);
            _masterServiceBuyer = masterServiceBuyer;
            _masterServiceSeller= masterServiceSeller;
            _masterServiceAdmin = masterServiceAdmin;
        }

        [HttpPost("Login/Buyer")]
        public async Task<ActionResult> BuyerLogin([FromBody]LoginModel model)
        {
            // For demonstration, we're accepting any username and password.
            // In a real application, you should validate the user credentials from a database.
            var result =await _masterServiceBuyer.GetAllAsyn(i=>i.email==model.Username && i.Buyerpassword==model.Password,"");    
            if (result.Count() != 0) // Replace with real validation
            {
                var token = _tokenService.GenerateToken(result[0].Id,result[0].Buyername, result[0].Buyeraddress, result[0].Buyerphonenumber,"Buyer");
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized("User Email or Password is incorrect");
            }
        }

        [HttpPost("Login/Seller")]
        public async Task<ActionResult> SellerLogin([FromBody] LoginModel model)
        {
            // For demonstration, we're accepting any username and password.
            // In a real application, you should validate the user credentials from a database.
            var result =await _masterServiceSeller.GetAsyn(i => i.email == model.Username && i.Organizationpassword == model.Password);

            if (result.Count() > 0 && result[0].Approved) // Replace with real validation
            {
                var token = _tokenService.GenerateToken(result[0].Id,result[0].Organizationname, result[0].Organizationaddress, result[0].Organizationphonenumber,"Seller");
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized("User Email or Password is incorrect");
            }
        }

        [HttpPost("Login/Admin")]
        public async Task<ActionResult> AdminLogin([FromBody] LoginModel model)
        {
            // For demonstration, we're accepting any username and password.
            // In a real application, you should validate the user credentials from a database.
            var result = await _masterServiceAdmin.GetAsyn(i => i.email == model.Username && i.AdminName == model.Password);

            if (result.Count() > 0) // Replace with real validation
            {
                var token = _tokenService.GenerateTokenAdmin(result[0].Id, result[0].AdminName, result[0].email, "Admin");
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized("User Email or Password is incorrect");
            }
        }
    }
}
