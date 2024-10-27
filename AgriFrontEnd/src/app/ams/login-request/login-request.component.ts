import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SellerUpdate } from 'src/app/Models/SellerUpdate';
import { SellerService } from 'src/app/Services/SellerService/seller.service';

@Component({
  selector: 'app-login-request',
  templateUrl: './login-request.component.html',
  styleUrls: ['./login-request.component.css']
})
export class LoginRequestComponent implements OnInit{
  constructor(private sellerObj:SellerService,private toast:ToastrService){}

  SellerUdateRecord:SellerUpdate={
    id:0,     
    leadername: '',
    leaderaadharnumber:'',
    leaderaddress:'',
    leaderphone:'',
    leaderemail:'' , 
    approved:false
  }

  SellerData:any=[]
  ngOnInit(): void {
      this.GetNotApprovedRecord()
  }

  Update(loginId:number,Approve:boolean){
      if(Approve){
        this.sellerObj.GetOneApi(loginId).subscribe({
          next:(data)=>{
            console.log(data[0].leaderaddress);
            this.SellerUdateRecord.id=data[0].id
            this.SellerUdateRecord.leaderaadharnumber=data[0].leaderaadharnumber
            this.SellerUdateRecord.approved=Approve
            this.SellerUdateRecord.leaderaddress = data[0].leaderaddress
            this.SellerUdateRecord.leadername =data[0].leadername
            this.SellerUdateRecord.leaderemail = data[0].leaderemail
            this.SellerUdateRecord.leaderphone = data[0].leaderphone
            console.log(this.SellerUdateRecord);
            this.sellerObj.PutApi(loginId,this.SellerUdateRecord).subscribe({
              next:(data)=>{
                this.toast.success("Approved The Login","Successfully");
                this.ngOnInit()
              },
              error:(err)=>{
                console.log(err);
              }
            })
            
          },
          error:(err)=>{
            console.log(err);
            
          }
        }) 
        // this.PutRecord(loginId,this.SellerUdateRecord)
      }
      else{
        this.DeleteRecord(loginId)
      }
      this.GetNotApprovedRecord()
  }
  // GetOneRecord(LoginId:number,approve:boolean){
  //   this.sellerObj.GetOneApi(LoginId).subscribe({
  //     next:(data)=>{
  //       console.log(data[0].leaderaddress);
  //       this.SellerUdateRecord.id=data[0].id
  //       this.SellerUdateRecord.leaderaadharnumber=data[0].leaderaadharnumber
  //       this.SellerUdateRecord.approved=approve
  //       this.SellerUdateRecord.leaderaddress = data[0].leaderaddress
  //       this.SellerUdateRecord.leadername =data[0].leadername
  //       this.SellerUdateRecord.leaderemail = data[0].leaderemail
  //       this.SellerUdateRecord.leaderphone = data[0].leaderphone
  //       console.log(this.SellerUdateRecord);
        
  //     },
  //     error:(err)=>{
  //       console.log(err);
        
  //     }
  //   })
  // }

  // PutRecord(LoginId:number,data:any){
  //   this.sellerObj.PutApi(LoginId,data).subscribe({
  //     next:(data)=>{
  //       this.toast.success("Approved The Login","Successfully");
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }

  DeleteRecord(LoginId:number){
      this.sellerObj.DeleteApi(LoginId).subscribe({
        next:(data)=>{
          this.toast.success("Remove The Login","Successfully");
          this.ngOnInit()
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  GetNotApprovedRecord(){
    this.sellerObj.GetNotApproved().subscribe({
      next:(data)=>{
        console.log(data);
        this.SellerData=data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
