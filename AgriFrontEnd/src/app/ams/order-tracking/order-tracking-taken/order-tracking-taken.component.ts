import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';

@Component({
  selector: 'app-order-tracking-taken',
  templateUrl: './order-tracking-taken.component.html',
  styleUrls: ['./order-tracking-taken.component.css']
})
export class OrderTrackingTakenComponent implements OnInit{

  constructor(private OrderObj:OrderServiceService,private Toast:ToastrService){}

  OrderDetails:any=[]

  ngOnInit(): void {
    this.GetApi(1);
  }


  GetApi(SellerId:number){
    this.OrderObj.GetAcceptedOrder(SellerId).subscribe({
      next:(data)=>{
        this.OrderDetails = data
        console.log(this.OrderDetails);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  PutApi(OrderId:number,Status:string){

    this.OrderObj.PutApiStatus(OrderId,Status).subscribe({
      next:(data)=>{
        this.Toast.success("Status is Edited","Success")
      },error:(err)=>{
        console.log(err);
      }
    })
  }


}
