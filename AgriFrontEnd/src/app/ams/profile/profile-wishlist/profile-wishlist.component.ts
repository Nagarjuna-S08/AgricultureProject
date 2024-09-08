import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishListServiceService } from 'src/app/Services/WishListService/wish-list-service.service';

@Component({
  selector: 'app-profile-wishlist',
  templateUrl: './profile-wishlist.component.html',
  styleUrls: ['./profile-wishlist.component.css']
})
export class ProfileWishlistComponent implements OnInit{
  
  WishListDetails:any=[]

  constructor(private toat:ToastrService,private WishListObj:WishListServiceService){}
  
  ngOnInit(): void {
    this.GetWishListApi(1)
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
