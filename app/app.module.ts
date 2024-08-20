import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeadersInterceptor } from './headers.interceptor';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule, // Only import BrowserModule here
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    DashboardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
