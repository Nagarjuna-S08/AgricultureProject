import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LandServiceService } from 'src/app/Services/LandService/land-service.service';

@Component({
  selector: 'app-farm-lands',
  templateUrl: './farm-lands.component.html',
  styleUrls: ['./farm-lands.component.css']
})
export class FarmLandsComponent implements OnInit{
    
    LandDetails:any=[]

    constructor(private tost:ToastrService,private obj:LandServiceService){}

    ngOnInit(): void {
      this.GetApi()
    }


    GetApi(){
      this.obj.GetApi().subscribe({
        next:(data:any)=>{
          this.LandDetails=data
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
}
