import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-my-land',
  templateUrl: './sell-my-land.component.html',
  styleUrls: ['./sell-my-land.component.css']
})
export class SellMyLandComponent implements OnInit {
  
  LandForm!:FormGroup;

  ngOnInit(): void {
    this.LandForm = new FormGroup({
      LandArea : new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      LandPrice: new FormControl('',[Validators.required,Validators.pattern('^-?\\d*(\\.\\d+)?$')]), // allow decimal and number
      LandAddress : new FormControl('',Validators.required),
      LandOwnername : new FormControl('',Validators.required),  // allow Name in any formet name . s or s . name
      LandPhoto : new FormControl('',Validators.required)
    })
  }

  FileChange(event:any){
    const UpdatedFile = event.target.files[0]
    this.LandForm.patchValue({
      LandPhoto : UpdatedFile
    })
    this.LandForm.get('LandPhoto')?.updateValueAndValidity();
  }

  SubmitForm(){
    console.log(this.LandForm);
  }

  ClearForm(){
    this.LandForm.reset();
  }
}
