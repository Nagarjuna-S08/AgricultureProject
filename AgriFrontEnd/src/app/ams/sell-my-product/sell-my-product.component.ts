import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-my-product',
  templateUrl: './sell-my-product.component.html',
  styleUrls: ['./sell-my-product.component.css']
})
export class SellMyProductComponent implements OnInit{
  
  ProductForm! : FormGroup

  ngOnInit(): void {
    this.ProductForm = new FormGroup({
      ProductName : new FormControl('',[Validators.required,Validators.pattern('^([A-Z]\.?\s?)*[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$')]), // allow Name in any formet name . s or s . name
      TotalStock : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      HarvestedDate :new FormControl('',[Validators.required,Validators.pattern('^(?:(?:\d{2}-\d{2}-\d{4})|(?:\d{4}-\d{2}-\d{2}))$')]), // allow dd-mm-yyyy , yyyy-mm-dd
      PricePerKg : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      ProductPhoto : new FormControl('',[Validators.required])
    })
  }

  FileChange(event:any){

    const UpdatedFile = event.target.files[0]
    this.ProductForm.patchValue({
      ProductPhoto : UpdatedFile
    })
    this.ProductForm.get('ProductPhoto')?.updateValueAndValidity()

  }

  SubmitForm(){
    console.log(this.ProductForm);
  }

  Clear(){
    this.ProductForm.reset()
  }
 
}
