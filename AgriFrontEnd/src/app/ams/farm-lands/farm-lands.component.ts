import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { WishListCreate } from 'src/app/Models/WishListCreate';
import { LandServiceService } from 'src/app/Services/LandService/land-service.service';
import { LandMoreDetailsPopUpService } from 'src/app/Services/PopUpServices/MoreDetailsPopUp/land-more-details-pop-up.service';
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
    POPUPData:any=null

    constructor(private tost:ToastrService,private obj:LandServiceService,private WishListObj:WishListServiceService,public PopupObj:LandMoreDetailsPopUpService,private authObj:AuthService){}

    ngOnInit(): void {
      this.GetApi()
    }

    onClick(Landid:number) {
      this.obj.GetOneApi(Landid).subscribe({
        next:(data)=>{
          this.POPUPData=data
          this.PopupObj.isClick(); // Call your function here
          console.log(this.POPUPData);
          
        },
        error:(err)=>{
          console.log(err);
        }
      })
      
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
      
      this.WishListCreateDetail.buyerid=this.authObj.GetUserId(this.authObj.GetToken());
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
