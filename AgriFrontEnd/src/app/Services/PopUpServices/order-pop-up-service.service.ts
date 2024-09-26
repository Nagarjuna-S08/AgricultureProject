import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderPopUpServiceService {
  PopUpShown = false
  constructor() { }

  isClick(){
    this.PopUpShown=!this.PopUpShown
  }
  
}
