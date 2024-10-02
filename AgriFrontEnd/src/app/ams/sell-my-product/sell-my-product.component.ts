import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductCreate } from 'src/app/Models/ProductCreate';
import { ProductUpdate } from 'src/app/Models/ProductUpdate';
import { ProductPopUPService } from 'src/app/Services/PopUpServices/ProductPopUp/product-pop-up.service';
import { ProductServiceService } from 'src/app/Services/ProductService/product-service.service';


@Component({
  selector: 'app-sell-my-product',
  templateUrl: './sell-my-product.component.html',
  styleUrls: ['./sell-my-product.component.css'],
})
export class SellMyProductComponent implements OnInit{
  
  ProductForm! : FormGroup
  ProductDetail:any =[]  // Need to know the difference
  ProductCreateDetail:ProductCreate={
    sellerid:0,
    productname:'',
    Totalquantity:0,
    AmountperKG:0,
    Harvesteddate:'',
    Updateddate:'',
    Productimage:''
  } 
  formData: FormData = new FormData();
  POPUPData:any=null

  constructor(private obj:ProductServiceService,private toat:ToastrService,public PopupObj:ProductPopUPService){}

  ngOnInit(): void {
    this.ProductForm = new FormGroup({
      productname : new FormControl('',[Validators.required,Validators.pattern('^([A-Z]\.?\s?)*[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$')]), // allow Name in any formet name . s or s . name
      Totalquantity : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      Harvesteddate :new FormControl('',[Validators.required]), // allow dd-mm-yyyy , yyyy-mm-dd
      AmountperKG : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      Productimage : new FormControl('',[Validators.required])
    })

    this.GetApiSubcribe()
  }

  onClick(Productid:number) {
    // debugger
    // This will prevent routing or navigation
   this.obj.GetOneApi(Productid).subscribe({
    next:(data)=>{
      this.POPUPData=data
      this.PopupObj.isClick()
      console.log("Data is Tranfered");
      
    },
    error:(err)=>{
      console.log(err);
    },
    complete: () => {
      console.log("API call complete");
    }
   })
 }

  FileChange(event: any) {
    const UpdatedFile = event.target.files[0];
    this.formData = new FormData(); 
    this.formData.append('source', UpdatedFile); 
  
    this.ProductForm.patchValue({
      Productimage: UpdatedFile.name
    });
    this.ProductForm.get('Productimage')?.updateValueAndValidity();
    this.toat.info(UpdatedFile.name,"Updated Image")
  }
  

  SubmitForm(){
    if(this.ProductForm.valid){
      this.ProductCreateDetail.AmountperKG=this.ProductForm.get('AmountperKG')?.value
      this.ProductCreateDetail.productname=this.ProductForm.get('productname')?.value
      this.ProductCreateDetail.Totalquantity=this.ProductForm.get('Totalquantity')?.value
      this.ProductCreateDetail.Harvesteddate=this.ProductForm.get('Harvesteddate')?.value
      this.ProductCreateDetail.Updateddate=new Date().toISOString();
      this.ProductCreateDetail.Productimage=this.ProductForm.get('Productimage')?.value
      this.ProductCreateDetail.sellerid=1
      console.log(this.ProductCreateDetail);
      this.PostApiSubcribe(this.ProductCreateDetail)

      this.toat.success("Product Added Successfully")

    }
    else{
      if(this.ProductForm.get('productname')?.invalid){
        this.toat.error("ProductName is Required and not Contains Number","Invalid")
      }
      else if(this.ProductForm.get('Totalquantity')?.invalid){
        this.toat.error("TotalStock is Required, contains only Numbers","Invalid") 
      }
      else if(this.ProductForm.get('Harvesteddate')?.invalid){
        this.toat.error("Harvestred Date is Required","Invalid") 
      }
      else if(this.ProductForm.get('AmountperKG')?.invalid){
        this.toat.error("Price Per Kg is Required, contains only Numbers","Invalid") 
      }
      else if(this.ProductForm.get('Productimage')?.invalid){
        this.toat.error("Product Image is Required","Invalid") 
      }
      
    }
    
  }

  DeleteApiSubscribe(id:number){
    this.obj.DeleteApi(id).subscribe({
      next:(value)=>{
        console.log("Deleted Successfully");
        this.GetApiSubcribe()
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  GetApiSubcribe(){
      this.obj.GetApi().subscribe({
        next:(data:any)=>{
          this.ProductDetail = data
          console.log(this.ProductDetail);
        },
        error:(error)=>{
          console.log(error);
        }
      })
  }


  PostApiSubcribe(ProductCreate: ProductCreate) {
    this.obj.PostApi(ProductCreate).subscribe({
      next: (productId: number) => {
        if (productId && this.formData.has('source')) { 

          this.obj.ImageUploadApi(productId, this.formData).subscribe({
            next: (response) => {
              console.log('File uploaded successfully', response);
              this.GetApiSubcribe();
              this.Clear();
            },
            error: (error) => {
              console.error('Error uploading file:', error);
            }
          });
        } 
        else {
          console.warn('Product created, but no file selected for upload.');
          this.GetApiSubcribe();
          this.Clear();
        }
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }

    });
  }
  
 
  Clear(){
    this.ProductForm.reset()
  }
}
