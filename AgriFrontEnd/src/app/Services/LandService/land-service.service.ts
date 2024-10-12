import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Environment';
import { LandCreate } from 'src/app/Models/LandCreate';
import { LandUpdate } from 'src/app/Models/LandUpdate';

@Injectable({
  providedIn: 'root'
})
export class LandServiceService {

  serverLink:string="/api/Land"
  constructor(private envi:Environment,private http:HttpClient) { }

  GetApi():Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink);
  }

  GetSellerApi(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/SellerLand/${id}`);
  }

  PostApi(PostData:LandCreate):Observable<number>{
    return this.http.post<number>(this.envi.environmentUrl+this.serverLink,PostData)
  }

  GetOneApi(id:number):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/Onedata/${id}`)
  }

  DeleteApi(id:number):Observable<any>{
    return this.http.delete<any>(this.envi.environmentUrl+this.serverLink+`/${id}`)
  }

  PutApi(id:number,PutData:LandUpdate):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/${id}`,PutData)
  }

  ImageUploadApi(id:number,FileData:any):Observable<any>{
    return this.http.put<any>(this.envi.environmentUrl+this.serverLink+`/ImageUpload/${id}`,FileData)
  }

  //Filter API's
  FilterGetApi(MinBudget:number,MaxBudget:number,MinArea:number,MaxArea:number,Locality:string):Observable<any>{
    return this.http.get<any>(this.envi.environmentUrl+this.serverLink+`/Filter/Budget/${MinBudget}/${MaxBudget}/${MinArea}/${MaxArea}/${Locality}`)
  }
  
}
