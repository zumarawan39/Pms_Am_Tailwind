import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SdashboardModule } from '../sdashboard/sdashboard.module';
import { AuthGuard } from '../auth.guard';
// import { StdDashboardComponent } from '../dashboard/components/std-dashboard/std-dashboard.component'

const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"StdDashboard",component:SdashboardModule,canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
