import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { SellerService } from 'src/app/Services/SellerService/seller.service';

@Component({
  selector: 'app-profile-seller',
  templateUrl: './profile-seller.component.html',
  styleUrls: ['./profile-seller.component.css']
})
export class ProfileSellerComponent {
  constructor(private toat: ToastrService,private SellerObj: SellerService, public authObj: AuthService) { }
  // User="Buyer"
  UserDetail: any = []
  ngOnInit(): void {
    this.GetUserdetails(this.authObj.GetUserId(this.authObj.GetToken()))
  }


  GetUserdetails(UserId: number) {
    if (this.authObj.GetRole(this.authObj.GetToken()) == "Seller") {
      this.SellerObj.GetOneApi(UserId).subscribe({
        next: (data:any)=> {
          this.UserDetail = data
          console.log(this.UserDetail);
        },
        error: (err:any) => {
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
