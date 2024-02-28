import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CarComponent } from './components/pages/car/car.component';
import { CarDetialComponent } from './components/pages/car-detial/car-detial.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminCarAddedComponent } from './admin/components/admin-car-added/admin-car-added.component';
import { AdminCarListComponent } from './admin/components/admin-car-list/admin-car-list.component';
import { LoginGuard } from './guards/login.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        canActivate:[LoginGuard],
        component: AdminHomeComponent,
      },
      {
        path: 'cars',
        canActivate:[LoginGuard],

        component: AdminCarListComponent,
      },{
        path: 'cars/add',
        canActivate:[LoginGuard],
        component: AdminCarAddedComponent,
      }
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
  },{
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthLoginGuard],
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
