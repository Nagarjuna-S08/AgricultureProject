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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { Environment } from './Environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrderPopUpComponent } from './ams/order-tracking/order-pop-up/order-pop-up.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './login/buyer/buyer.component';
import { SellerLoginComponent } from './login/seller-login/seller-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SellerRegisterComponent } from './register-page/seller-register/seller-register.component';
import { BuyerRegisterComponent } from './register-page/buyer-register/buyer-register.component';
import { SellMyLandPopUpComponent } from './ams/sell-my-land/sell-my-land-pop-up/sell-my-land-pop-up.component';
import { SellMyProductPopUpComponent } from './ams/sell-my-product/sell-my-product-pop-up/sell-my-product-pop-up.component';
import { FarmLandsMoreDetailsPopUpComponent } from './ams/farm-lands/farm-lands-more-details-pop-up/farm-lands-more-details-pop-up.component';
import { InterceptorFileInterceptor } from './AuthService_Gaurd/interceptor-file.interceptor';
import { ProfileSellerComponent } from './ams/profile-seller/profile-seller.component';
import { LoginRequestComponent } from './ams/login-request/login-request.component';
import { ReviewComponent } from './ams/review/review.component';

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
    ProfileOrdersComponent,
    OrderPopUpComponent,
    LoginComponent,
    BuyerComponent,
    SellerLoginComponent,
    AdminLoginComponent,
    RegisterPageComponent,
    SellerRegisterComponent,
    BuyerRegisterComponent,
    SellMyLandPopUpComponent,
    SellMyProductPopUpComponent,
    FarmLandsMoreDetailsPopUpComponent,
    ProfileSellerComponent,
    LoginRequestComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,// required animations module
    ToastrModule.forRoot({
      timeOut: 3000, // Duration in milliseconds
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true, // Prevents duplicate toasts
      closeButton: true, // Adds a close button to the toast
      progressBar: true, // Shows a progress bar
      progressAnimation: 'decreasing', // Progress animation ('increasing' or 'decreasing')
      easeTime: 300, // Duration of the ease effect
      // tapToDismiss: true, // Allows dismissing the toast by clicking on it
    }),
    FormsModule
  ],
  providers: [
    Environment,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorFileInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
