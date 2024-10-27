import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SellerCreate } from 'src/app/Models/SellerCreate';
import { SellerService } from 'src/app/Services/SellerService/seller.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {

  constructor(private sellerObj:SellerService,private toast:ToastrService,private router:Router){}
  
  sellerForm:SellerCreate={
    organizationname:'',
    email:'',
    organizationaddress:'',
    organizationphonenumber:'',
    organizationpassword:'',
    leadername: '',
    leaderaadharnumber: '',
    leaderaddress: '',
    leaderphone:'',
    leaderemail:'',
    approved: false
  }

  RegisterSeller(event: any, confirmPasswordInput: any) {
    event.preventDefault();  // Prevent default form submission

    // Perform validation checks
    if (this.sellerForm.organizationname === '' ||
        this.sellerForm.email === '' ||
        this.sellerForm.organizationaddress === '' ||
        this.sellerForm.organizationphonenumber === '' ||
        this.sellerForm.organizationpassword === '' ||
        this.sellerForm.leadername === '' ||
        this.sellerForm.leaderaddress === '' ||
        this.sellerForm.leaderphone === '' ||
        this.sellerForm.leaderemail === '') {
        this.toast.error("All Feilds are required","Invalid");
      return;
    }

    // Check if passwords match
    if (this.sellerForm.organizationpassword !== confirmPasswordInput.value) {
      this.toast.error("Password does not match","Invalid")
      return;
    }

    // If all validations pass, submit the form or log the form data
    console.log('Form Submitted', this.sellerForm);
    console.log('Confirm Password:', confirmPasswordInput.value);

    this.sellerObj.PostApi(this.sellerForm).subscribe({
      next:(data:any)=>{
        this.toast.success("Register Successfully","Success");
        this.router.navigateByUrl("/Login/Seller")
      },
      error:(err)=>{
        this.toast.error(err.error,"Invalid")
      }
    })
  }
  
}
