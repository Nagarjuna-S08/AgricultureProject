import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartUpdate } from 'src/app/Models/CartUpdate';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';

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
  constructor(private toat:ToastrService,private CartObj:CartServiceService){}
  
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
}
