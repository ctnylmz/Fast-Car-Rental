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
import { AdminBrandListComponent } from './admin/components/admin-brand-list/admin-brand-list.component';
import { AdminColorListComponent } from './admin/components/admin-color-list/admin-color-list.component';
import { AdminBrandAddComponent } from './admin/components/admin-brand-add/admin-brand-add.component';
import { AdminColorAddComponent } from './admin/components/admin-color-add/admin-color-add.component';
import { AdminBrandUpdatedComponent } from './admin/components/admin-brand-updated/admin-brand-updated.component';
import { AdminColorUpdatedComponent } from './admin/components/admin-color-updated/admin-color-updated.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        canActivate: [LoginGuard],
        component: AdminHomeComponent,
      },
      {
        path: 'brand',
        canActivate: [LoginGuard],
        component: AdminBrandListComponent,
      },
      {
        path: 'brand/add',
        canActivate: [LoginGuard],
        component: AdminBrandAddComponent,
      },
      {
        path: 'brand/update/:id',
        canActivate: [LoginGuard],
        component: AdminBrandUpdatedComponent,
      },
      {
        path: 'color',
        canActivate: [LoginGuard],
        component: AdminColorListComponent,
      },
      {
        path: 'color/add',
        canActivate: [LoginGuard],
        component: AdminColorAddComponent,
      },
      {
        path: 'color/update/:id',
        canActivate: [LoginGuard],
        component: AdminColorUpdatedComponent,
      },
      {
        path: 'cars',
        canActivate: [LoginGuard],
        component: AdminCarListComponent,
      },
      {
        path: 'cars/add',
        canActivate: [LoginGuard],
        component: AdminCarAddedComponent,
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
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
