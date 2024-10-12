import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  IsLoggedIn(){
    return !!sessionStorage.getItem('token');
  }
  
  
  GetToken(): string {
    return sessionStorage.getItem('token') || '';
  }


  GetRole(result:string):string{
    const base64Url = result.split('.')[1]; // Split based on assumption that token is a base64 encoded string
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((char) => {
          return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const objJSON = JSON.parse(jsonPayload);
        // console.log(objJSON);
    return objJSON.Role;
  }

  GetUserId(result:string):number{
    const base64Url = result.split('.')[1]; // Split based on assumption that token is a base64 encoded string
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((char) => {
          return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const objJSON = JSON.parse(jsonPayload);
        // console.log(objJSON);
        const userId: number = Number(objJSON.UserId);

    return userId;
  }

}
