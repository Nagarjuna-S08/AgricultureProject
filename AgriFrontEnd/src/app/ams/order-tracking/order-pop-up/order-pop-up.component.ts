import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderPopUpServiceService } from 'src/app/Services/PopUpServices/order-pop-up-service.service';

@Component({
  selector: 'app-order-pop-up',
  templateUrl: './order-pop-up.component.html',
  styleUrls: ['./order-pop-up.component.css']
})
export class OrderPopUpComponent implements OnChanges{
  
  constructor(public PopUpObj:OrderPopUpServiceService){}
  @Input() PopUpData:any

  ngOnChanges(changes: SimpleChanges): void {
    // Detect changes to @Input() PopUpData and handle them
    if (changes['PopUpData'] && changes['PopUpData'].currentValue) {
      console.log('PopUpData has been updated:', this.PopUpData);
    }
  }
  

}