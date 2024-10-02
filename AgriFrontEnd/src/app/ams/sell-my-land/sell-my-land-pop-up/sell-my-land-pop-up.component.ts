import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';
import { OrderPopUpServiceService } from 'src/app/Services/PopUpServices/order-pop-up-service.service';
import { OrderTrackingIncomingComponent } from '../../order-tracking/order-tracking-incoming/order-tracking-incoming.component';
import { OrderUpdate } from 'src/app/Models/OrderUpdate';
import { LandUpdate } from 'src/app/Models/LandUpdate';
import { LandServiceService } from 'src/app/Services/LandService/land-service.service';
import { LandPopUpService } from 'src/app/Services/PopUpServices/SellLandPopUp/land-pop-up.service';
import { SellMyLandComponent } from '../sell-my-land.component';

@Component({
  selector: 'app-sell-my-land-pop-up',
  templateUrl: './sell-my-land-pop-up.component.html',
  styleUrls: ['./sell-my-land-pop-up.component.css']
})
export class SellMyLandPopUpComponent implements OnChanges,OnInit{
  constructor(private tost:ToastrService,private LandObj:LandServiceService,public PopUpObj:LandPopUpService,private SellLandObj:SellMyLandComponent){}
  @Input() PopUpData:any
  PopUpForm!:FormGroup
  LandUpdate:LandUpdate={
    id:0,
    ownername:'',
    landarea:0,
    landprice:0,
    landaddress:'',
    updateddate:'',
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Detect changes to @Input() PopUpData and handle them
    if (changes['PopUpData'] && changes['PopUpData'].currentValue) {
      console.log('PopUpData has been updated:', this.PopUpData[0].ownername);
      this.LandUpdate.ownername=this.PopUpData[0].ownername
      this.LandUpdate.landarea=this.PopUpData[0].landarea
      this.LandUpdate.landprice=this.PopUpData[0].landprice
      this.LandUpdate.landaddress=this.PopUpData[0].landaddress
      this.LandUpdate.updateddate=this.PopUpData[0].updateddate
      this.LandUpdate.id=this.PopUpData[0].id
      // console.log(this.LandUpdate);
      
    }
  }
  
  ngOnInit(): void {
    // this.PopUpForm = new FormGroup({
    //   landarea : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
    //   landprice: new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
    //   landaddress : new FormControl('',Validators.required),
    //   ownername : new FormControl('',Validators.required),  // allow Name in any formet name . s or s . name
    //   LandPhoto : new FormControl('',Validators.required)
    // })
  }

  PopUpSubmit(){
    if(this.LandUpdate.landaddress !='' && this.LandUpdate.landarea !=0 && this.LandUpdate.landprice !=0 && this.LandUpdate.ownername !=''){
      // this.LandUpdate.id=OrderId;
      // this.LandUpdate.ownername=this.PopUpForm.get('delivarydate')?.value
      // this.LandUpdate.landarea=0
      // this.LandUpdate.landprice=0
      // this.LandUpdate.landaddress=''
      this.LandUpdate.updateddate=new Date().toDateString()

      this.LandObj.PutApi(this.LandUpdate.id,this.LandUpdate).subscribe({
        next:(data)=>{
          this.tost.success("Land Details Edited","Successfully")
          this.SellLandObj.ngOnInit()
          this.PopUpObj.isClick()
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    else{
      if(this.LandUpdate.landaddress ==''){
        this.tost.error("Land Address is Required","Invalid")
      }
      else if(this.LandUpdate.landarea == 0){
        this.tost.error("LandArea is Required","Invalid") 
      }
      else if(this.LandUpdate.landprice ==0){
        this.tost.error("LandPrice is Required","Invalid") 
      }
      else if(this.LandUpdate.ownername ==''){
        this.tost.error("Owner Name is Required","Invalid") 
      }
    }
  }
}
