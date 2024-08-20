import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddStdComponent } from './components/add-std/add-std.component';
import { ShowStdComponent } from './components/show-std/show-std.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path:"",component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:"",component:ShowStdComponent},
    {path:"addStd",component:AddStdComponent},
    {path:"showStd",component:ShowStdComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
