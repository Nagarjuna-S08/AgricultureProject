import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';

@Component({
  selector: 'app-profile-cart',
  templateUrl: './profile-cart.component.html',
  styleUrls: ['./profile-cart.component.css']
})
export class ProfileCartComponent implements OnInit{

  CartDetails:any=[]

  constructor(private toat:ToastrService,private CartObj:CartServiceService){}
  
  ngOnInit(): void {
    this.GetCartApi(1)
  }

  GetCartApi(BuyerId:number){
    this.CartObj.GetBuyerCartApi(BuyerId).subscribe({
      next:(data:any)=>{
        this.CartDetails=data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
}
