import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CarComponent } from './components/pages/car/car.component';
import { CarDetialComponent } from './components/pages/car-detial/car-detial.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'orders',
        component: AdminHomeComponent,
      },
    ],
  },
  
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
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
