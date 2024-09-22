import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/Services/CartService/cart-service.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent {

  constructor(private toast : ToastrService,private obj:CartServiceService){}
  
}
