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


  DeleteApi(id:number){
    this.WishListObj.DeleteApi(id).subscribe({
      next:(data)=>{
        this.GetWishListApi(1)
        this.toat.success("Deleted Sucessfully","Deleted")
        // console.log("Deleted Successfully");
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
        console.log(this.WishListDetails);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
}
