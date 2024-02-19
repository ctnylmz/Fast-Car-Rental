import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CarDetialComponent } from './components/car-detial/car-detial.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/category/:id',
    component: CarComponent,
  },
  {
    path: 'cars/detial/:id',
    component: CarDetialComponent,
  },{
    path: 'cart',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
