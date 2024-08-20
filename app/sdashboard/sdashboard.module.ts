import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdashboardRoutingModule } from './sdashboard-routing.module';
import { SDashboardComponent } from './s-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { StdDetailsComponent } from './components/std-details/std-details.component';


@NgModule({
  declarations: [
    SDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AsidebarComponent,
    StdDetailsComponent
  ],
  imports: [
    CommonModule,
    SdashboardRoutingModule,
    SdashboardRoutingModule
  ]
})
export class SdashboardModule { }
