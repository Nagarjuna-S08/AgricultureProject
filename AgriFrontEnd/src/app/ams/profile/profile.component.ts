import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';
import { WishListServiceService } from 'src/app/Services/WishListService/wish-list-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  CartDetails:any=[]
  WishListDetails:any=[]

  constructor(private toat:ToastrService,private CartObj:CartServiceService,private WishListObj:WishListServiceService){}

  ngOnInit(): void {

    this.GetCartApi(1)
    this.GetWishListApi(1)

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
  
  GetWishListApi(BuyerId:number){
    this.WishListObj.GetBuyerWishList(BuyerId).subscribe({
      next:(data:any)=>{
        this.WishListDetails=data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
