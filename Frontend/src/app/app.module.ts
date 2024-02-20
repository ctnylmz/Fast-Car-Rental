import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CarComponent } from './components/pages/car/car.component';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarDetialComponent } from './components/pages/car-detial/car-detial.component';
import { CartComponent } from './components/pages/cart/cart.component';


@NgModule({ 
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    HomeComponent,
    SearchFilterPipe,
    CarDetialComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
