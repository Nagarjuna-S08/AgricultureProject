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

const routes: Routes = [
  {path:'AMS',title:'AMS',component:AMSComponent,children:[
    {path:'Home',title:'AMS',component:HomeComponent},

    {path:'FarmLands',title:'AMS',component:FarmLandsComponent},

    {path:'FeildToTable',title:'AMS',component:FeildToTableComponent},

    {path:'SellMyProduct',title:'AMS',component:SellMyProductComponent},

    {path:'SellMyLand',title:'AMS',component:SellMyLandComponent},

    {path:'OrderTracking',title:'AMS',component:OrderTrackingComponent , children:[
      {path:'Incoming',title:'AMS',component:OrderTrackingIncomingComponent},
      {path:'Taken',title:'AMS',component:OrderTrackingTakenComponent},
      {path:'',redirectTo:'Incoming',pathMatch:'full'}
    ]},

    {path:'Profile',title:'AMS',component:ProfileComponent,children:[
      {path:'WishList',title:'AMS',component:ProfileWishlistComponent},
      {path:'Cart',title:'AMS',component:ProfileCartComponent},
      {path:'Orders',title:'AMS',component:ProfileOrdersComponent},
      {path:'',redirectTo:'Cart',pathMatch:'full'}
    ]},

    {path:'',redirectTo:'AMS/Home',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'AMS/Home',pathMatch:'full'},
  {path:'**',redirectTo:'AMS/Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
