import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SDashboardComponent } from './s-dashboard.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { StdDetailsComponent } from './components/std-details/std-details.component';

const routes: Routes = [
  {path:"std",component:SDashboardComponent,children:[{
    path:"",component:StdDetailsComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdashboardRoutingModule { }
