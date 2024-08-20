import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';

const routes: Routes = [
  {path:"",loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:"welcome",loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:"dashboard",loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  {path:"StdDashboard",loadChildren:()=>import("./sdashboard/sdashboard.module").then((m)=>m.SdashboardModule)},
  {path:"**",component:PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
