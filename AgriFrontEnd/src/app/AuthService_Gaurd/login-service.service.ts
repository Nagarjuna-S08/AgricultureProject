import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../Models/LoginModel';
import { Observable } from 'rxjs';
import { Environment } from '../Environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient,private toast:ToastrService,private envi:Environment) { }

  PostApiBuyer(LoginModel:LoginModel):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+`/api/Auth/Login/Buyer`,LoginModel)
  }
  PostApiAsdmin(LoginModel:LoginModel):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+`/api/Auth/Login/Admin`,LoginModel)
  }
  PostApiSeller(LoginModel:LoginModel):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+`/api/Auth/Login/Seller`,LoginModel)
  }
}
