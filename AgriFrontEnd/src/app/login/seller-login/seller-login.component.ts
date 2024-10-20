import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';
import { LoginServiceService } from 'src/app/AuthService_Gaurd/login-service.service';
import { LoginModel } from 'src/app/Models/LoginModel';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  constructor(private LoginObj:LoginServiceService,private toast:ToastrService,private routeObj:Router,private TokenObj:AuthService){}

  loginModel:LoginModel={
    username:'',
    password:''
  }

  LoginFun(){
     // Email regex pattern
    console.log(this.loginModel);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailPattern.test(this.loginModel.username)) {
    //   this.toast.error("Invalid email format.","Invalid");
    // } 
    // else 
    if (this.loginModel.password.trim() === '') {
      this.toast.error("Password cannot be empty.","Invalid");
    } 
    else {
      this.LoginObj.PostApiSeller(this.loginModel).subscribe({
        next:(data)=>{
          sessionStorage.setItem("token",data.token)
          this.toast.success("Login Successfully","Success")
          this.routeObj.navigateByUrl("/AMS/Home")
          this.TokenObj.GetRole(this.TokenObj.GetToken())
        },
        error:(err)=>{
          this.toast.error(err.error,"Invalid")
        }
      })
    }
  }
}
