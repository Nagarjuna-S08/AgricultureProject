import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BuyerCreate } from 'src/app/Models/BuyerCreate';
import { BuyerService } from 'src/app/Services/BuyerService/buyer.service';

@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.css']
})
export class BuyerRegisterComponent {

  constructor(private buyerObj:BuyerService,private toast:ToastrService,private router:Router){}
  buyerForm:BuyerCreate={
    buyername:'',
    email:'',
    buyeraddress:'',
    buyerphonenumber:'',
    buyerpassword:''
  }

  RegisterSeller(event:any,conformPassword:any){
    event.preventDefault();  // Prevent form from submitting

    // Perform validation
    if (this.buyerForm.buyername === '' || 
        this.buyerForm.email === '' || 
        this.buyerForm.buyeraddress === '' || 
        this.buyerForm.buyerphonenumber === '' || 
        this.buyerForm.buyerpassword === '') {
        this.toast.error("All Feilds are required","Invalid");
      return;
    }

    if (this.buyerForm.buyerpassword !== conformPassword.value) {
      this.toast.error("Password does not match","Invalid")
      return;
    }

    console.log('Form Submitted', this.buyerForm);
    console.log('Password Confirmation:', conformPassword.value);
    
    this.buyerObj.PostApi(this.buyerForm).subscribe({
      next:(data:any)=>{
        this.toast.success("Register Successfully","Success");
        this.router.navigateByUrl("/Login/Buyer")
      },
      error:(err)=>{
        this.toast.error(err.error,"Invalid")
      }
    })
  }
}
