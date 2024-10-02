import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductPopUPService {
  PopUpShown = false
  constructor() { }

  isClick(){
    this.PopUpShown=!this.PopUpShown
  }
}
