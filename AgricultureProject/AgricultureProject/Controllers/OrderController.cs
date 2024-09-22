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


        [HttpGet("GetSellerOrder/{Id:int}")]
        public async Task<ActionResult<List<OrderDetails>>> GetOne(int Id)
        {
            if (Id == 0)
            {
                return BadRequest();
            }
            var result = await _masterService.GetAsyn(i => i.Sellerid == Id, includeProperties: "Seller,Buyer");
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
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
        public async Task<IActionResult> ProductUpdate([FromBody] OrderUpdate dtoupdate, int Id)
        {
            if (Id == 0 || Id != dtoupdate.Id)
            {
                return BadRequest();
            }
            await _orderService.Update(dtoupdate, Id);
            return Ok();
        }


        [HttpPost("AddFromCart/{BuyerId:int}/{Paymentmethod}/{Paymentdate}")]
        public async Task<IActionResult> AddFromCart(int BuyerId,string Paymentdate,string Paymentmethod )
        {

            var dataCart = await _masterCart.GetAllAsyn(i => i.Buyerid == BuyerId,"Seller,Buyer,Product");

            //OrderDetails order = new OrderDetails();

            if (dataCart == null || !dataCart.Any())
            {
                return NotFound();
            }
            var groupData = dataCart.GroupBy(i => i.Sellerid).ToList();
            Console.WriteLine(groupData);


            foreach (var item in groupData)
            {
                Console.WriteLine($"SellerId: {item.Key}");

                foreach (var group in item)
                {
                    Console.WriteLine($"Product: {group.Product.Productname}, Buyer: {group.Buyer.Buyername}");
                }

                // Use `item` (which is the grouped collection) to apply `Where`, `Select`, and `Sum`
                var productIds = string.Join(",", item
                    .Where(i => i.Product != null)   // Check if Product is not null
                    .Select(i => i.Product.Id.ToString()));

                var productNames = string.Join(",", item
                    .Where(i => i.Product != null)   // Check if Product is not null
                    .Select(i => i.Product.Productname));

                var productQuantities = string.Join(",", item
                    .Select(i => i.Quantity));

                var ProductAmount = string.Join(",", item
                    .Select(i => i.Totalamount));

                // Create a new `OrderDetails` instance for each grouped seller
                var order = new OrderDetails
                {
                    Buyerid = BuyerId,
                    Sellerid = item.Key,  // `item.Key` contains the grouped SellerId
                    Quantity = item.Count(), 
                    Totalamount = item.Sum(i => i.Totalamount),  // Sum over the grouped items
                    Paymentdate = Paymentdate,
                    Paymentmethod = Paymentmethod,
                    Productids = productIds,
                    ProductNames = productNames,
                    ProductAmount = ProductAmount,
                    productQuantities = productQuantities,
                    Status = "Pending"
                };

                // Save the new order for each group of products
                await _orderService.ProductCreate(order);
            }
            
            return Ok();

        }
    }
}
