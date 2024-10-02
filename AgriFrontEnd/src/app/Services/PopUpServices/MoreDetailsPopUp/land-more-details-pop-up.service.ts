import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandMoreDetailsPopUpService {
  PopUpShown = false
  constructor() { }

  isClick(){
    this.PopUpShown=!this.PopUpShown
  }
}
