import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/AuthService_Gaurd/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public authObjNav:AuthService,private routerObj:Router){}
  Logout(event:any){
    event.preventDefault()
    sessionStorage.clear()
    this.routerObj.navigateByUrl("/Login");
  }
}
