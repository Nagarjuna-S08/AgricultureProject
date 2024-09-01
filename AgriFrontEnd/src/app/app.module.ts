import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AMSComponent } from './ams/ams.component';
import { HomeComponent } from './ams/home/home.component';
import { NavBarComponent } from './ams/nav-bar/nav-bar.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AMSComponent,
    HomeComponent,
    NavBarComponent,
    FarmLandsComponent,
    FeildToTableComponent,
    SellMyProductComponent,
    SellMyLandComponent,
    OrderTrackingComponent,
    OrderTrackingIncomingComponent,
    OrderTrackingTakenComponent,
    ProfileComponent,
    ProfileWishlistComponent,
    ProfileCartComponent,
    ProfileOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
