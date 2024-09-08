import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private tost:ToastrService,private obj:ProductServiceService,private CartObj:CartServiceService){}
  
  ngOnInit(): void {
    this.GetApi()
  }


  GetApi(){
    this.obj.GetApi().subscribe({
      next:(data:any)=>{
        this.FeildToTable=data
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  CartAdd(ProductId:number , PricePerKg:number , TotalKg:String){
    this.CartAddDetails.productid=ProductId
    this.CartAddDetails.quantity = Number(TotalKg)
    this.CartAddDetails.totalamount = this.CartAddDetails.quantity * PricePerKg
    this.CartAddDetails.sellerid=1;
    this.CartAddDetails.buyerid=1;

    this.CartObj.PostApi(this.CartAddDetails).subscribe({
      next:(data:any)=>{
        this.tost.success("Product Added to Cart")
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
