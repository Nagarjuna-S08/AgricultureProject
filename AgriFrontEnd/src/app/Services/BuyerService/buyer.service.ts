import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Environment';
import { BuyerCreate } from 'src/app/Models/BuyerCreate';
import { BuyerUpadate } from 'src/app/Models/BuyerUpdate';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private envi:Environment,private http:HttpClient) { }
  serverLink:string="/api/Buyer"

  GetApi():Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink)
  }
  GetOneApi(BuyerId:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/Onedata/${BuyerId}`)
  }
  PostApi(BuyerDetail:BuyerCreate):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+this.serverLink,BuyerDetail)
  }
  DeleteApi(BuyerId:number){
    return this.http.delete<any>(this.envi.environmentUrl+this.serverLink+`/${BuyerId}`)
  }
  PutApi(BuyerId:number,BuyerDetails:BuyerUpadate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/${BuyerId}`,BuyerDetails)
  }
}
