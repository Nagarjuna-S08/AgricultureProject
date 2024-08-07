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
    public class OrderController : ControllerBase
    {
        private readonly IMasterService<OrderDetails> _masterService;
        private readonly IOrderService _orderService;
        private readonly IMasterService<CartDetails> _masterCart;
        private readonly IMapper _mapper;

        public OrderController(IMasterService<OrderDetails> masterService, IOrderService orderservice, IMapper mapper,IMasterService<CartDetails> cartmaster)
        {
            _mapper = mapper;
            _orderService = orderservice;
            _masterService = masterService;
            _masterCart = cartmaster;
        }

        [HttpGet]
        public async Task<ActionResult<List<OrderDetails>>> GetAll()
        {
            var result = await _masterService.GetAllAsyn(includeProperties: "Seller,Buyer");
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }


        [HttpGet("Onedata/{Id:int}")]
        public async Task<ActionResult<List<OrderDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Id == Id, includeProperties: "Seller,Buyer");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }






        //[HttpPost] 
        //public async Task<IActionResult> CreateProduct(OrderCreate Order)
        //{
        //    if (Order == null)
        //    {
        //        return BadRequest();
        //    }
        //    await _orderService.ProductCreate(Order);
        //    return Ok("Added Successfully");
        //}





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
        public async Task<IActionResult> ProductUpdate([FromBody] OrderUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _orderService.Update(dtoupdate, Id);
            return Ok(dtoupdate);
        }


        //[HttpPost("AddFromCart/{BuyerId:int}")]
        //public async Task<IActionResult> AddFromCart([FromBody]OrderCreate order,int BuyerId)
        //{
        //    var dataCart = await _masterCart.GetAllAsyn(i => i.Buyerid == BuyerId);

        //    if(dataCart == null)
        //    {
        //        return NotFound("No items in Cart");
        //    }
        //    var productids = string.Join(",",dataCart.Select(dataCart => dataCart.Product.Id.ToString()));
        //    var productNames = string.Join(",", dataCart.Select(dataCart => dataCart.Product.Productname.ToString()));

        //    order.Productids = productids;
        //    order.ProductNames = productNames;

        //    await _orderService.ProductCreate(order);

        //    return Ok("Added Successfully");
        //}


        [HttpPost("AddFromCart/{BuyerId:int}/{Paymentmethod}/{Paymentdate}")]
        public async Task<IActionResult> AddFromCart(int BuyerId,string Paymentdate,string Paymentmethod )
        {
        
            var dataCart = await _masterCart.GetAllAsyn(i => i.Buyerid == BuyerId);

            if (dataCart == null)
            {
                return NotFound("No items in Cart");
            }
            var groupData = dataCart.GroupBy(dataCart => dataCart.Sellerid).ToList();

            foreach (var group in groupData)
            {
                foreach (var item in group)
                {
                    var productids = string.Join(",", item.Product.Id.ToString());
                    var productNames = string.Join(",", item.Product.Productname.ToString());

                    OrderDetails order = new OrderDetails();
                    order.Buyerid = item.Buyerid;
                    order.Sellerid= item.Sellerid;
                    order.Quantity = item.Quantity;
                    order.Totalamount = item.Totalamount;
                    order.Paymentdate = Paymentdate;
                    order.Paymentmethod = Paymentmethod;
                    order.Productids = productids;
                    order.ProductNames = productNames;
                    order.Status = "Pending";

                    await _orderService.ProductCreate(order);
                }
            }

            return Ok("Added Successfully");
        }
    }
}
