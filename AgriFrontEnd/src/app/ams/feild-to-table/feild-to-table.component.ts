import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { CartCreate } from 'src/app/Models/CartCreate';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';
import { ProductServiceService } from 'src/app/Services/ProductService/product-service.service';

@Component({
  selector: 'app-feild-to-table',
  templateUrl: './feild-to-table.component.html',
  styleUrls: ['./feild-to-table.component.css']
})
export class FeildToTableComponent implements OnInit{
  FeildToTable:any=[]

  CartAddDetails:CartCreate={
    buyerid:0,
    sellerid:0,
    productid:0,
    quantity:0,
    totalamount:0
  }
  filterText: string = ''
  filteredFeildToTableDetails: any[] = []; // Add this for optimized search

  constructor(private tost:ToastrService,private obj:ProductServiceService,private CartObj:CartServiceService,public authObj:AuthService){}
  
  ngOnInit(): void {
    this.GetApi()
  }


  GetApi(){
    this.obj.GetApi().subscribe({
      next:(data:any)=>{
        this.FeildToTable=data
        this.filteredFeildToTableDetails = [...data]; // Initialize filtered data
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  CartAdd(ProductId:number , PricePerKg:number , TotalKg:String , sellerId:number){
    this.CartAddDetails.productid=ProductId
    this.CartAddDetails.quantity = Number(TotalKg)
    this.CartAddDetails.totalamount = this.CartAddDetails.quantity * PricePerKg
    this.CartAddDetails.sellerid= sellerId;
    this.CartAddDetails.buyerid=this.authObj.GetUserId(this.authObj.GetToken());

    this.CartObj.PostApi(this.CartAddDetails).subscribe({
      next:(data:any)=>{
        this.tost.success("Product Added to Cart")
        this.GetApi()
      },
      error:(error)=>{
        this.tost.error("The Item is already exists in the Cart.","Invalid");
      }
    })
  }

  filterData(): void {
    if (!this.filterText.trim()) {
      this.GetApi(); // Reset the list if filter text is empty
      return;
    }
  
    const filterTextLower = this.filterText.toLowerCase(); // Lowercase for case-insensitive matching
  
    this.filteredFeildToTableDetails = this.FeildToTable.filter((item: any) => {
      return (
        (item.productname?.toLowerCase() || '').includes(filterTextLower) ||
        (item.amountperKG?.toString() || '').toLowerCase().includes(filterTextLower) ||
        (item.totalquantity?.toString() || '').toLowerCase().includes(filterTextLower) ||
        // (item.totalquantity?.toLowerCase() || '').includes(filterTextLower) ||
        (item.harvesteddate?.toLowerCase() || '').includes(filterTextLower) ||
        (item.updateddate?.toLowerCase() || '').includes(filterTextLower) 
        // (item.amountperKG?.toLowerCase() || '').includes(filterTextLower)
      );
    });
    
  }
  
}
