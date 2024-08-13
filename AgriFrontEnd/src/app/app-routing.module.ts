import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AMSComponent } from './ams/ams.component';
import { HomeComponent } from './ams/home/home.component';
import { FarmLandsComponent } from './ams/farm-lands/farm-lands.component';
import { FeildToTableComponent } from './ams/feild-to-table/feild-to-table.component';
import { SellMyProductComponent } from './ams/sell-my-product/sell-my-product.component';
import { SellMyLandComponent } from './ams/sell-my-land/sell-my-land.component';

const routes: Routes = [
  {path:'AMS',title:'AMS',component:AMSComponent,children:[
    {path:'Home',title:'AMS',component:HomeComponent},
    {path:'FarmLands',title:'AMS',component:FarmLandsComponent},
    {path:'FeildToTable',title:'AMS',component:FeildToTableComponent},
    {path:'SellMyProduct',title:'AMS',component:SellMyProductComponent},
    {path:'SellMyLand',title:'AMS',component:SellMyLandComponent},
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
