import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Environment';
import { ProductCreate } from 'src/app/Models/ProductCreate';
import { ProductUpdate } from 'src/app/Models/ProductUpdate';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  serverLink:string="/api/Product"
  constructor(private envi:Environment,private http:HttpClient) { }

  GetApi():Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink);
  }

  GetSellerApi(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/SellerProduct/${id}`);
  }

  PostApi(PostData:ProductCreate):Observable<number>{
    return this.http.post<number>(this.envi.environmentUrl+this.serverLink,PostData)
  }

  GetOneApi(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/Onedata/${id}`)
  }

  DeleteApi(id:number):Observable<any>{
    return this.http.delete<any>(this.envi.environmentUrl+this.serverLink+`/${id}`)
  }

  PutApi(id:number,PutData:ProductUpdate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/${id}`,PutData)
  }

  ImageUploadApi(id:number,FileData:any):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/ImageUpload/${id}`,FileData)
  }

  // Filter API's
  FilterGetApi(Date:string):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/Filter/${Date}`)
  }
  
}
