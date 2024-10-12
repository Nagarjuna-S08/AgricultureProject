import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActiveGuard implements CanActivate {
  constructor(private authObj:AuthService, private routerObj : Router){}

  canActivate(){
    if(this.authObj.IsLoggedIn()){
      this.routerObj.navigateByUrl('/AMS/Home');
      return false;
    }else{
      return true;
    }
  }
  
}
