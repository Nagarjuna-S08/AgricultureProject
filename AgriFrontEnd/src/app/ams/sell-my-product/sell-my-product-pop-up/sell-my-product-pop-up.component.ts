import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductPopUPService } from 'src/app/Services/PopUpServices/ProductPopUp/product-pop-up.service';
import { ProductServiceService } from 'src/app/Services/ProductService/product-service.service';
import { SellMyProductComponent } from '../sell-my-product.component';
import { FormGroup } from '@angular/forms';
import { ProductUpdate } from 'src/app/Models/ProductUpdate';

@Component({
  selector: 'app-sell-my-product-pop-up',
  templateUrl: './sell-my-product-pop-up.component.html',
  styleUrls: ['./sell-my-product-pop-up.component.css']
})
export class SellMyProductPopUpComponent implements OnChanges,OnInit{

  constructor(private tost:ToastrService,private ProductObj:ProductServiceService,public PopUpObj:ProductPopUPService,private SellProductObj:SellMyProductComponent){}
  @Input() PopUpData:any
  PopUpForm!:FormGroup
  ProductUpdate:ProductUpdate={
    id:0,
    productname:'',
    totalquantity:0,
    amountperKG:0,
    harvesteddate:'',
    updateddate:''
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Detect changes to @Input() PopUpData and handle them
    if (changes['PopUpData'] && changes['PopUpData'].currentValue) {
      console.log('PopUpData has been updated:', this.PopUpData[0].ownername);
      this.ProductUpdate.productname=this.PopUpData[0].productname
      this.ProductUpdate.totalquantity=this.PopUpData[0].totalquantity
      this.ProductUpdate.amountperKG=this.PopUpData[0].amountperKG
      this.ProductUpdate.harvesteddate=this.PopUpData[0].harvesteddate
      this.ProductUpdate.updateddate=this.PopUpData[0].updateddate
      this.ProductUpdate.id=this.PopUpData[0].id
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
    if(this.ProductUpdate.harvesteddate !='' && this.ProductUpdate.totalquantity !=0 && this.ProductUpdate.amountperKG !=0 && this.ProductUpdate.productname !=''){
      // this.LandUpdate.id=OrderId;
      // this.LandUpdate.ownername=this.PopUpForm.get('delivarydate')?.value
      // this.LandUpdate.landarea=0
      // this.LandUpdate.landprice=0
      // this.LandUpdate.landaddress=''
      this.ProductUpdate.updateddate=new Date().toDateString()

      this.ProductObj.PutApi(this.ProductUpdate.id,this.ProductUpdate).subscribe({
        next:(data)=>{
          this.tost.success("Land Details Edited","Successfully")
          this.SellProductObj.ngOnInit()
          this.PopUpObj.isClick()
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    else{
      if(this.ProductUpdate.harvesteddate ==''){
        this.tost.error("Harvested Date is Required","Invalid")
      }
      else if(this.ProductUpdate.totalquantity == 0){
        this.tost.error("Quantuty is Required","Invalid") 
      }
      else if(this.ProductUpdate.amountperKG ==0){
        this.tost.error("Amount per KG is Required","Invalid") 
      }
      else if(this.ProductUpdate.productname ==''){
        this.tost.error("Product Name is Required","Invalid") 
      }
    }
  }
}
