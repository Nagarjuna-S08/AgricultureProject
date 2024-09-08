import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Environment';
import { WishListCreate } from 'src/app/Models/WishListCreate';
import { WishListUpdate } from 'src/app/Models/WishListUpdate';

@Injectable({
  providedIn: 'root'
})
export class WishListServiceService {

  ServerLink : string = '/api/Wishlist'

  constructor(private http:HttpClient,private envi:Environment) { }

  GetAPi():Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.ServerLink);
  }

  GetApiOne(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.ServerLink+`/Onedata/${id}`)
  }

  GetBuyerWishList(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.ServerLink+`/BuyerWishList/${id}`)
  }

  PostApi(PostData:WishListCreate):Observable<any>{
    return this.http.post<any>(this.envi.environmentUrl+this.ServerLink,PostData);
  }

  PutApi(id:number,PutData:WishListUpdate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.ServerLink+`/${id}`,PutData)
  }

  DeleteApi(id:number):Observable<any>{
    return this.http.delete<any>(this.envi.environmentUrl+this.ServerLink+`/${id}`)
  }
}
