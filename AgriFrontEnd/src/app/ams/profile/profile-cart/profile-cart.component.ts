import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartUpdate } from 'src/app/Models/CartUpdate';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';

@Component({
  selector: 'app-profile-cart',
  templateUrl: './profile-cart.component.html',
  styleUrls: ['./profile-cart.component.css']
})
export class ProfileCartComponent implements OnInit{

  CartDetails:any=[]
  CartUpdate:CartUpdate={
    id:0,
    quantity:0,
    totalamount:0
  }
  constructor(private toat:ToastrService,private CartObj:CartServiceService,private OrderObj:OrderServiceService){}
  
  ngOnInit(): void {
    this.GetCartApi(1)
  }

  GetCartApi(BuyerId:number){
    this.CartObj.GetBuyerCartApi(BuyerId).subscribe({
      next:(data:any)=>{
        this.CartDetails=data
        console.log(this.CartDetails);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  

  UpdateCart(TotalQuantity:string,RecordId:number,amountperKG:number){
    this.CartUpdate.id=RecordId
    this.CartUpdate.quantity=Number(TotalQuantity)
    this.CartUpdate.totalamount=Number(TotalQuantity) * amountperKG
    
    // console.log(this.CartUpdate);
    // console.log(typeof amountperKG);
    
    
    this.CartObj.PutApi(RecordId,this.CartUpdate).subscribe({
      next:(data)=>{
        this.GetCartApi(1)
        this.toat.success("Edited Successfully","Edited")
      },error:(err)=>{
        console.log(err);
      }
    })
  }


  DeleteApi(id:number){
    this.CartObj.DeleteApi(id).subscribe({
      next:(data)=>{
        this.GetCartApi(1)
        this.toat.success("Deleted Sucessfully","Deleted")
        // console.log("Deleted Successfully");
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  //Order api are given below for adding the cart items to order table here

  AddOrder(BuyerId:number,paymentMethode:string){
    const data = new Date();
    const day = String(data.getDate()).padStart(2, '0');    // Pads the day with leading zero
    const month = String(data.getMonth() + 1).padStart(2, '0'); // Pads the month with leading zero
    const year = data.getFullYear();

    this.OrderObj.PostApi(BuyerId,paymentMethode,`${day}-${month}-${year}`).subscribe({
        next:(data)=>{
          this.toat.success("Order is Placed","Order")
          this.CartObj.DeleteBuyerCartApi(BuyerId).subscribe({
            next:(data)=>{
              console.log("Cart is deleted after the order is placed");
              this.GetCartApi(1);
            },
            error:(err)=>{
              console.log(err);
            }
          })
        },
        error:(err)=> {
          console.log(err)  
          this.toat.error("No Item in Cart to place Order","Invalid")
        },
    })
  }

}
