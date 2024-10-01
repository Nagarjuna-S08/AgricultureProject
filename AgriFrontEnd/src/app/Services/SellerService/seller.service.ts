import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Environment';
import { SellerCreate } from 'src/app/Models/SellerCreate';
import { SellerUpdate } from 'src/app/Models/SellerUpdate';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private envi:Environment,private http:HttpClient) { }
  serverLink:string="/api/Seller"

  GetApi():Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink)
  }
  GetOneApi(SellerId:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/Onedata/${SellerId}`)
  }
  PostApi(SellerDetail:SellerCreate):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+this.serverLink,SellerDetail)
  }
  DeleteApi(SellerId:number){
    return this.http.delete<any>(this.envi.environmentUrl+this.serverLink+`/${SellerId}`)
  }
  PutApi(SellerId:number,SellerDetails:SellerUpdate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/${SellerId}`,SellerDetails)
  }
}
