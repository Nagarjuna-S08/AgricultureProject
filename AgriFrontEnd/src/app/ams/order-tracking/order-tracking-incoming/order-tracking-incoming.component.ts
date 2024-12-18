import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { OrderUpdate } from 'src/app/Models/OrderUpdate';
import { OrderServiceService } from 'src/app/Services/OrderService/order-service.service';
import { OrderPopUpServiceService } from 'src/app/Services/PopUpServices/order-pop-up-service.service';

@Component({
  selector: 'app-order-tracking-incoming',
  templateUrl: './order-tracking-incoming.component.html',
  styleUrls: ['./order-tracking-incoming.component.css']
})
export class OrderTrackingIncomingComponent implements OnInit{
  constructor(private OrderObj:OrderServiceService,private Tost:ToastrService,public PopupObj:OrderPopUpServiceService,private authObj:AuthService){}
  
  OrderSeller:any=[]
  POPUPData:any=null

  OrderUpdate:OrderUpdate={
    id:0,
    delivarydate:'',
    status:'',
    acceptCheck:false
  }
  filterText: string = ''
  filteredFeildToTableDetails: any[] = []; // Add this for optimized search

  onClick(event: Event,orderid:number) {
    event.preventDefault(); // This will prevent routing or navigation
    this.OrderObj.GetOneApi(orderid).subscribe({
      next:(data)=>{
        this.POPUPData=data
        this.PopupObj.isClick(); // Call your function here
      },
      error:(err)=>{
        console.log(err);
      }
    })
    
  }

  ngOnInit(): void {
    this.GetApi(this.authObj.GetUserId(this.authObj.GetToken()))
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
        this.filteredFeildToTableDetails = [...data]; // Initialize filtered data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  OpenPopUp(){
    
  }

  filterData(): void {
    if (!this.filterText.trim()) {
      this.GetApi(this.authObj.GetUserId(this.authObj.GetToken())); // Reset the list if filter text is empty
      return;
    }
  
    const filterTextLower = this.filterText.toLowerCase(); // Lowercase for case-insensitive matching
  
    this.filteredFeildToTableDetails = this.OrderSeller.filter((item: any) => {
      return (
        (item.productids?.toLowerCase() || '').includes(filterTextLower) ||
        (item.productNames?.toLowerCase() || '').includes(filterTextLower) ||
        // (item.quantity?.toLowerCase() || '').includes(filterTextLower) ||
        (item.productQuantities?.toString() || '').toLowerCase().includes(filterTextLower) ||
        (item.productAmount?.toString() || '').toLowerCase().includes(filterTextLower) ||
        (item.totalamount?.toString() || '').toLowerCase().includes(filterTextLower) ||
        (item.quantity?.toString() || '').toLowerCase().includes(filterTextLower) ||
        // (item.totalquantity?.toLowerCase() || '').includes(filterTextLower) ||
        (item.buyer?.buyername?.toLowerCase() || '').includes(filterTextLower) ||
        (item.buyer?.buyeraddress?.toLowerCase() || '').includes(filterTextLower) 
        // (item.amountperKG?.toLowerCase() || '').includes(filterTextLower)
      );
    });
    
  }
}
