import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CarComponent } from './components/pages/car/car.component';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarDetialComponent } from './components/pages/car-detial/car-detial.component';
import { CartComponent } from './components/pages/cart/cart.component';

import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './components/pages/login/login.component';


@NgModule({ 
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    HomeComponent,
    SearchFilterPipe,
    CarDetialComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
