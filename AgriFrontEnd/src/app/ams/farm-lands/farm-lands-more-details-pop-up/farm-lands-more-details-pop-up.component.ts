import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LandServiceService } from 'src/app/Services/LandService/land-service.service';
import { LandMoreDetailsPopUpService } from 'src/app/Services/PopUpServices/MoreDetailsPopUp/land-more-details-pop-up.service';

@Component({
  selector: 'app-farm-lands-more-details-pop-up',
  templateUrl: './farm-lands-more-details-pop-up.component.html',
  styleUrls: ['./farm-lands-more-details-pop-up.component.css']
})
export class FarmLandsMoreDetailsPopUpComponent implements OnChanges{
  constructor(public PopUpObj:LandMoreDetailsPopUpService,private Toast:ToastrService,private LandObj:LandServiceService){}
  @Input() PopUpData:any
  PopUpForm!:FormGroup
  ngOnChanges(changes: SimpleChanges): void {
    // Detect changes to @Input() PopUpData and handle them
    if (changes['PopUpData'] && changes['PopUpData'].currentValue) {
      console.log('PopUpData has been updated:', this.PopUpData);
    }
  }

}
