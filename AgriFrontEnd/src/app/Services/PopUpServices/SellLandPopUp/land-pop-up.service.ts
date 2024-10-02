import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandPopUpService {
  PopUpShown = false
  constructor() { }

  isClick(){
    this.PopUpShown=!this.PopUpShown
  }
}
