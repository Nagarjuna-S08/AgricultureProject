import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/Services/ProductService/product-service.service';

@Component({
  selector: 'app-feild-to-table',
  templateUrl: './feild-to-table.component.html',
  styleUrls: ['./feild-to-table.component.css']
})
export class FeildToTableComponent implements OnInit{
    FeildToTable:any=[]

  constructor(private toat:ToastrService,private obj:ProductServiceService){}
  
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

  wishList(){

  }

  CartAdd(){
    
  }

}
