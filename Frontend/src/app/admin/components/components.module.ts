import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { ReactiveFormsModule , FormsModule, Validators } from '@angular/forms';
import { AdminCarAddedModule } from './admin-car-added/admin-car-added.module';
import { AdminCarListModule } from './admin-car-list/admin-car-list.module';
import { AdminBrandListModule } from './admin-brand-list/admin-brand-list.module';
import { AdminColorListModule } from './admin-color-list/admin-color-list.module';
import { AdminBrandAddModule } from './admin-brand-add/admin-brand-add.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminHomeModule,
    AdminCarAddedModule,
    AdminCarListModule,
    AdminBrandListModule,
    AdminColorListModule,
    AdminBrandAddModule
    
    
  ]
})
export class ComponentsModule { }
