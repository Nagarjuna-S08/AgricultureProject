import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGaurdGuard implements CanActivate {

  constructor(private router: Router,private authObj:AuthService) { }

  Buyer:string[]=["Home","FarmLands","FeildToTable","Profile"]
  Seller:string[]=["Home","FarmLands","FeildToTable","SellMyProduct","SellMyLand","OrderTracking","SellerProfile"]
  Admin:string[]=["Home","FarmLands","FeildToTable","LoginRequest"]
  i:number=0
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  // Get the full URL from the snapshot, which is more reliable than using this.router.url
  const fullUrl = state.url;
  const urlSegments = fullUrl.split('/');
  console.log(urlSegments); // Check the segments for debugging

  const role = this.authObj.GetRole(this.authObj.GetToken());

  // Role-based navigation
  // debugger
  if(role=="Buyer"){
    for(this.i=0;this.i<this.Buyer.length;this.i++){
      if(urlSegments[2]==this.Buyer[this.i]){
        return true
      }
    }
  }
  else if(role=="Seller"){
    for(this.i=0;this.i<this.Seller.length;this.i++){
      if(urlSegments[2]==this.Seller[this.i]){
        return true
      }
    }
  }
  else{
    for(this.i=0;this.i<this.Admin.length;this.i++){
      if(urlSegments[2]==this.Admin[this.i]){
        return true
      }
    }
  }

  // If no valid role or route found, redirect to home or login page
  this.router.navigate(['/AMS/Home']); // or another fallback route
  return false;
}


}
