import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderUpdate } from 'src/app/Models/OrderUpdate';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';
import { OrderPopUpServiceService } from 'src/app/Services/PopUpServices/order-pop-up-service.service';
import { OrderTrackingIncomingComponent } from '../order-tracking-incoming/order-tracking-incoming.component';

@Component({
  selector: 'app-order-pop-up',
  templateUrl: './order-pop-up.component.html',
  styleUrls: ['./order-pop-up.component.css']
})
export class OrderPopUpComponent implements OnChanges,OnInit{
  
  constructor(public PopUpObj:OrderPopUpServiceService,private Toast:ToastrService,private OrderObj:OrderServiceService,private IncomingObj:OrderTrackingIncomingComponent){}
  @Input() PopUpData:any
  PopUpForm!:FormGroup
  OrderUpdate:OrderUpdate={
    id:0,
    delivarydate:'',
    status:'',
    acceptCheck:false
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Detect changes to @Input() PopUpData and handle them
    if (changes['PopUpData'] && changes['PopUpData'].currentValue) {
      console.log('PopUpData has been updated:', this.PopUpData);
    }
  }
  
  ngOnInit(): void {
      this.PopUpForm = new FormGroup({
        delivarydate : new FormControl('',[Validators.required])
      })
  }

  PopUpSubmit(OrderId:number){
    if(this.PopUpForm.valid){
      this.OrderUpdate.id=OrderId;
      this.OrderUpdate.delivarydate=this.PopUpForm.get('delivarydate')?.value
      this.OrderUpdate.status="Pending"
      this.OrderUpdate.acceptCheck=true

      this.OrderObj.PutApi(OrderId,this.OrderUpdate).subscribe({
        next:(data)=>{
          this.Toast.success("Added To Tracking","Successfully")
          this.IncomingObj.ngOnInit()
          this.PopUpObj.isClick()
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    else{
      this.Toast.error("Provide Delicary Date","Inavlid")
    }
  }

  

}