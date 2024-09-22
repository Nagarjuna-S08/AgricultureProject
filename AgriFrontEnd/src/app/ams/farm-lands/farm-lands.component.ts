import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishListCreate } from 'src/app/Models/WishListCreate';
import { LandServiceService } from 'src/app/Services/LandService/land-service.service';
import { WishListServiceService } from 'src/app/Services/WishListService/wish-list-service.service';

@Component({
  selector: 'app-farm-lands',
  templateUrl: './farm-lands.component.html',
  styleUrls: ['./farm-lands.component.css']
})
export class FarmLandsComponent implements OnInit{
    
    LandDetails:any=[]
    WishListCreateDetail : WishListCreate={
      buyerid:0,
      landid:0,
      sellerid:0
    }

    constructor(private tost:ToastrService,private obj:LandServiceService,private WishListObj:WishListServiceService){}

    ngOnInit(): void {
      this.GetApi()
    }


    GetApi(){
      this.obj.GetApi().subscribe({
        next:(data:any)=>{
          this.LandDetails=data
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }

    WishListAdd(LandId:number,sellerid:number){
      
      this.WishListCreateDetail.buyerid=1;
      this.WishListCreateDetail.sellerid=sellerid
      this.WishListCreateDetail.landid=LandId
      this.WishListObj.PostApi(this.WishListCreateDetail).subscribe({
        next:(data)=>{
          this.tost.success("Added to WishList","Added")
        },
        error:(err)=>{
          this.tost.warning("The product already exists in the wishlist.","Invalid");
        }
      })
    }
  
}
