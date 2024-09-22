import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderUpdate } from 'src/app/Models/OrderUpdate';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';

@Component({
  selector: 'app-order-tracking-incoming',
  templateUrl: './order-tracking-incoming.component.html',
  styleUrls: ['./order-tracking-incoming.component.css']
})
export class OrderTrackingIncomingComponent implements OnInit{
  constructor(private OrderObj:OrderServiceService,private Tost:ToastrService){}
  
  OrderSeller:any=[]

  OrderUpdate:OrderUpdate={
    id:0,
    delivarydate:'',
    status:''
  }
  ngOnInit(): void {
    this.GetApi(1)
  }

  PutApi(OrderID:number,DelivaryDate:string,DelivaryStatus:string){

    this.OrderUpdate.delivarydate=DelivaryDate
    this.OrderUpdate.status=DelivaryStatus
    this.OrderUpdate.id=OrderID

    this.OrderObj.PutApi(OrderID,this.OrderUpdate).subscribe({
      next:(data)=>{
        this.Tost.success("Added To Tracking","Successfully")
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  DeleteApi(OrderID:number){
    this.OrderObj.DeleteApi(OrderID).subscribe({
      next:(data)=>{
        this.Tost.info("Sucessfully Removed From the Order","Info")
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  GetApi(SellerId:number){
    this.OrderObj.GetSellerOrderApi(SellerId).subscribe({
      next:(data)=>{
        this.OrderSeller=data;
        console.log(this.OrderSeller);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  OpenPopUp(){
    
  }
}
