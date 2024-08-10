import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AMSComponent } from './ams/ams.component';
import { HomeComponent } from './ams/home/home.component';
import { FarmLandsComponent } from './ams/farm-lands/farm-lands.component';

const routes: Routes = [
  {path:'AMS',title:'AMS',component:AMSComponent,children:[
    {path:'Home',title:'AMS',component:HomeComponent},
    {path:'FarmLands',title:'AMS',component:FarmLandsComponent},
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
