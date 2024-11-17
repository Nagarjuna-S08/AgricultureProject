import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';

@Component({
  selector: 'app-order-tracking-taken',
  templateUrl: './order-tracking-taken.component.html',
  styleUrls: ['./order-tracking-taken.component.css']
})
export class OrderTrackingTakenComponent implements OnInit{

  constructor(private OrderObj:OrderServiceService,private Toast:ToastrService,private authObj:AuthService){}

  OrderDetails:any=[]
  filterText: string = ''
  filteredFeildToTableDetails: any[] = []; // Add this for optimized search

  ngOnInit(): void {
    this.GetApi(this.authObj.GetUserId(this.authObj.GetToken()));
  }


  GetApi(SellerId:number){
    this.OrderObj.GetAcceptedOrder(SellerId).subscribe({
      next:(data)=>{
        this.OrderDetails = data
        console.log(this.OrderDetails);
        this.filteredFeildToTableDetails = [...data]; // Initialize filtered data
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

  filterData(): void {
    if (!this.filterText.trim()) {
      this.GetApi(this.authObj.GetUserId(this.authObj.GetToken())); // Reset the list if filter text is empty
      return;
    }
  
    const filterTextLower = this.filterText.toLowerCase(); // Lowercase for case-insensitive matching
  
    this.filteredFeildToTableDetails = this.OrderDetails.filter((item: any) => {
      return (
        (item.paymentmethod?.toLowerCase() || '').includes(filterTextLower) ||
        (item.paymentdate?.toLowerCase() || '').includes(filterTextLower) ||
        (item.status?.toLowerCase() || '').includes(filterTextLower) ||
        (item.quantity?.toString() || '').toLowerCase().includes(filterTextLower) ||
        (item.id?.toString() || '').toLowerCase().includes(filterTextLower) ||
        (item.buyer?.buyername?.toLowerCase() || '').includes(filterTextLower) 
      );
    });
    
  }

}
