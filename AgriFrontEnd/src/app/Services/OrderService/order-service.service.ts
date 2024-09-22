import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Environment } from 'src/app/Environment';
import { OrderUpdate } from 'src/app/Models/OrderUpdate';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient,private envi:Environment) { }
  serverLink:string='/api/Order'

  GetApi():Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink);
  }

  PostApi(buyerid:number,paymentmethode:string,paymentDate:string):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+this.serverLink+`/AddFromCart/${buyerid}/${paymentmethode}/${paymentDate}`,null)
  }

  DeleteApi(OrderId:number):Observable<any>{
    return this.http.delete<any>(this.envi.environmentUrl+this.serverLink+`/${OrderId}`)
  }

  PutApi(OrderId:number,orderPut:OrderUpdate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/${OrderId}`,orderPut)
  }

  GetSellerOrderApi(id:number):Observable<any>{
    return this.http.get(this.envi.environmentUrl+this.serverLink+`/GetSellerOrder/${id}`)
  }

}
