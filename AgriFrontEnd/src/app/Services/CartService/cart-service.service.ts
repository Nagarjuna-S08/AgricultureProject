import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Environment';
import { CartCreate } from 'src/app/Models/CartCreate';
import { CartUpdate } from 'src/app/Models/CartUpdate';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  ServerLink : string = '/api/Cart'

  constructor(private http:HttpClient,private envi:Environment) { }

  GetAPi():Observable<any>{
    // console.log(this.envi+this.ServerLink);
    return this.http.get<any>(this.envi.environmentUrl+this.ServerLink);
  }

  GetApiOne(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.ServerLink+`/Onedata/${id}`)
  }

  GetBuyerCartApi(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.ServerLink+`/BuyerCart/${id}`)
  }

  PostApi(PostData:CartCreate):Observable<any>{
    // console.log(this.envi+this.ServerLink)
    return this.http.post<any>(this.envi.environmentUrl+this.ServerLink,PostData);
  }

  PutApi(id:number,PutData:CartUpdate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.ServerLink+`/${id}`,PutData)
  }

  DeleteApi(id:number):Observable<any>{
    return this.http.delete<any>(this.envi.environmentUrl+this.ServerLink+`/${id}`)
  }
}
