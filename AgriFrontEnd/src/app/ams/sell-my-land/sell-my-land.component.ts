import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LandCreate } from 'src/app/Models/LandCreate';
import { ProductCreate } from 'src/app/Models/ProductCreate';
import { LandServiceService } from 'src/app/Services/LandService/land-service.service';

@Component({
  selector: 'app-sell-my-land',
  templateUrl: './sell-my-land.component.html',
  styleUrls: ['./sell-my-land.component.css']
})
export class SellMyLandComponent implements OnInit {
  
  LandForm!:FormGroup;
  LandDetails:any=[]
  FileData:FormData = new FormData()

  LandCreateDetail:LandCreate={
    sellerid:0,
    ownername:'',
    landarea:0,
    landprice:0,
    landaddress:'',
    updateddate:''
  }

  constructor(private tost:ToastrService,private obj:LandServiceService){}

  ngOnInit(): void {
    this.LandForm = new FormGroup({
      landarea : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      landprice: new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      landaddress : new FormControl('',Validators.required),
      ownername : new FormControl('',Validators.required),  // allow Name in any formet name . s or s . name
      LandPhoto : new FormControl('',Validators.required)
    })
    this.GetApi()
  }

  FileChange(event:any){
    const UpdatedFile = event.target.files[0]
    this.LandForm.patchValue({
      LandPhoto : UpdatedFile
    })
    const FileData = new FormData()
    FileData.append('source',UpdatedFile)

    this.LandForm.get('LandPhoto')?.updateValueAndValidity();
    this.tost.info(UpdatedFile.name,"Updated File")
  }

  SubmitForm(){
    if(this.LandForm.valid){

      this.LandCreateDetail.landaddress=this.LandForm.get('landaddress')?.value
      this.LandCreateDetail.landarea=this.LandForm.get('landarea')?.value
      this.LandCreateDetail.landprice=this.LandForm.get('landprice')?.value
      this.LandCreateDetail.ownername=this.LandForm.get('ownername')?.value
      this.LandCreateDetail.updateddate=new Date().toDateString()
      this.LandCreateDetail.sellerid=1
      
      this.PostApi(this.LandCreateDetail)

      this.tost.success("Land Added Successfully","Added")
    }
    else{
      if(this.LandForm.get('landarea')?.invalid){
        this.tost.error("LandArea is Required","Invalid")
      }
      else if(this.LandForm.get('landprice')?.invalid){
        this.tost.error("LandPrice is Required, Does Not Contain Alphabet","Invalid") 
      }
      else if(this.LandForm.get('landaddress')?.invalid){
        this.tost.error("Land Address is Required","Invalid") 
      }
      else if(this.LandForm.get('ownername')?.invalid){
        this.tost.error("Owner Name is Required","Invalid") 
      }
      else if(this.LandForm.get('LandPhoto')?.invalid){
        this.tost.error("Land Image is Required","Invalid") 
      }
    }
  }



  GetApi(){
    this.obj.GetApi().subscribe({
      next:(data:any)=>{
        this.LandDetails=data
        console.log(this.LandDetails);
        
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }


  DeleteApi(id:number){
    this.obj.DeleteApi(id).subscribe({
      next:(data)=>{
        this.tost.success("Deleted Successfully","Deleted")
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  PostApi(LandCreate:LandCreate){
    this.obj.PostApi(LandCreate).subscribe({
      next:(LandId:number)=>{
        if (LandId && this.FileData.has('source')) { 

          this.obj.ImageUploadApi(LandId, this.FileData).subscribe({
            next: (response) => {
              console.log('File uploaded successfully', response);
              this.GetApi();
              this.Clear();
            },
            error: (error) => {
              console.error('Error uploading file:', error);
            }
          });
        } 
        else {
          console.warn('Product created, but no file selected for upload.');
          this.GetApi();
          this.Clear();
        }
      }
    })
  }

  Clear(){
    this.LandForm.reset();
  }
}
