import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AMSComponent } from './ams/ams.component';
import { HomeComponent } from './ams/home/home.component';
import { FarmLandsComponent } from './ams/farm-lands/farm-lands.component';
import { FeildToTableComponent } from './ams/feild-to-table/feild-to-table.component';
import { SellMyProductComponent } from './ams/sell-my-product/sell-my-product.component';
import { SellMyLandComponent } from './ams/sell-my-land/sell-my-land.component';
import { OrderTrackingComponent } from './ams/order-tracking/order-tracking.component';
import { OrderTrackingIncomingComponent } from './ams/order-tracking/order-tracking-incoming/order-tracking-incoming.component';
import { OrderTrackingTakenComponent } from './ams/order-tracking/order-tracking-taken/order-tracking-taken.component';
import { ProfileComponent } from './ams/profile/profile.component';
import { ProfileWishlistComponent } from './ams/profile/profile-wishlist/profile-wishlist.component';
import { ProfileCartComponent } from './ams/profile/profile-cart/profile-cart.component';
import { ProfileOrdersComponent } from './ams/profile/profile-orders/profile-orders.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SellerLoginComponent } from './login/seller-login/seller-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { BuyerComponent } from './login/buyer/buyer.component';
import { SellerRegisterComponent } from './register-page/seller-register/seller-register.component';
import { BuyerRegisterComponent } from './register-page/buyer-register/buyer-register.component';
import { LoginActiveGuard } from './AuthService_Gaurd/GaurdFolder/login-active.guard';
import { RoleGaurdGuard } from './AuthService_Gaurd/GaurdFolder/role-gaurd.guard';
import { ProfileSellerComponent } from './ams/profile-seller/profile-seller.component';
import { LoginRequestComponent } from './ams/login-request/login-request.component';
import { ReviewComponent } from './ams/review/review.component';

const routes: Routes = [
  {path:'Login',title:'AMS',component:LoginComponent,children:[
    {path:'Seller',title:'AMS',component:SellerLoginComponent},
    {path:'Buyer',title:'AMS',component:BuyerComponent},
    {path:'Admin',title:'AMS',component:AdminLoginComponent},

    {path:'',redirectTo:'Seller',pathMatch:'full'}
  ],canActivate:[LoginActiveGuard]},
  {path:'Register',title:'AMS',component:RegisterPageComponent,children:[
    {path:'Seller',title:'AMS',component:SellerRegisterComponent},
    {path:'Buyer',title:'AMS',component:BuyerRegisterComponent}
  ]},
  {path:'AMS',title:'AMS',component:AMSComponent,children:[
    {path:'Home',title:'AMS',component:HomeComponent},

    {path:'FarmLands',title:'AMS',component:FarmLandsComponent,canActivate:[RoleGaurdGuard]},

    {path:'FeildToTable',title:'AMS',component:FeildToTableComponent,canActivate:[RoleGaurdGuard]},

    {path:'SellMyProduct',title:'AMS',component:SellMyProductComponent,canActivate:[RoleGaurdGuard]},

    {path:'SellMyLand',title:'AMS',component:SellMyLandComponent,canActivate:[RoleGaurdGuard]},

    {path:'LoginRequest',title:'AMS',component:HomeComponent,canActivate:[RoleGaurdGuard]},

    {path:'OrderTracking',title:'AMS',component:OrderTrackingComponent , children:[
      {path:'Incoming',title:'AMS',component:OrderTrackingIncomingComponent},
      {path:'Taken',title:'AMS',component:OrderTrackingTakenComponent},
      {path:'',redirectTo:'Incoming',pathMatch:'full'}
    ],canActivate:[RoleGaurdGuard]},

    {path:'Profile',title:'AMS',component:ProfileComponent,children:[
      {path:'WishList',title:'AMS',component:ProfileWishlistComponent},
      {path:'Cart',title:'AMS',component:ProfileCartComponent},
      {path:'Orders',title:'AMS',component:ProfileOrdersComponent},
      {path:'',redirectTo:'Cart',pathMatch:'full'}
    ],canActivate:[RoleGaurdGuard]},

    {path:'SellerProfile',title:'AMS',component:ProfileSellerComponent},

    {path:'LoginRequests',title:'AMS',component:LoginRequestComponent},

    {path:'Reviews',title:'AMS',component:ReviewComponent},

    {path:'',redirectTo:'AMS/Home',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'**',redirectTo:'Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
