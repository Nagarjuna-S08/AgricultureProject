import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { BuyerService } from 'src/app/Services/BuyerService/buyer.service';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';
import { SellerService } from 'src/app/Services/SellerService/seller.service';
import { WishListServiceService } from 'src/app/Services/WishListService/wish-list-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private toat:ToastrService,private CartObj:CartServiceService,private WishListObj:WishListServiceService,private BuyerObj:BuyerService,private SellerObj:SellerService,public authObj:AuthService){}
  // User="Buyer"
  UserDetail:any=[]
  ngOnInit(): void {
    this.GetUserdetails(this.authObj.GetUserId(this.authObj.GetToken()))
  }


  GetUserdetails(UserId:number){
    if(this.authObj.GetRole(this.authObj.GetToken())=="Buyer"){
      this.BuyerObj.GetOneApi(UserId).subscribe({
        next:(data)=>{
          this.UserDetail=data
          console.log(this.UserDetail);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    else if(this.authObj.GetRole(this.authObj.GetToken())=="Seller"){
      this.SellerObj.GetOneApi(UserId).subscribe({
        next:(data)=>{
          this.UserDetail=data
          console.log(this.UserDetail);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }


  // GetCartApi(BuyerId:number){
  //   this.CartObj.GetBuyerCartApi(BuyerId).subscribe({
  //     next:(data:any)=>{
  //       this.CartDetails=data
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }
  
  // GetWishListApi(BuyerId:number){
  //   this.WishListObj.GetBuyerWishList(BuyerId).subscribe({
  //     next:(data:any)=>{
  //       this.WishListDetails=data
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }

}
