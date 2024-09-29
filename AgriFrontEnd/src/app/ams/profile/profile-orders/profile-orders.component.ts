import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent {

  constructor(private OrderObj:OrderServiceService,private Toast:ToastrService){}

  OrderDetailsForBuyer:any=[]

  ngOnInit(): void {
    this.GetApi(1);
  }


  GetApi(BuyerId:number){
    this.OrderObj.GetAcceptedOrderBuyer(BuyerId).subscribe({
      next:(data)=>{
        this.OrderDetailsForBuyer = data
        console.log(this.OrderDetailsForBuyer);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
}
