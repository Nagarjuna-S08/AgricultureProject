import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AMSComponent } from './ams/ams.component';
import { HomeComponent } from './ams/home/home.component';
import { NavBarComponent } from './ams/nav-bar/nav-bar.component';
import { FarmLandsComponent } from './ams/farm-lands/farm-lands.component';

@NgModule({
  declarations: [
    AppComponent,
    AMSComponent,
    HomeComponent,
    NavBarComponent,
    FarmLandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
