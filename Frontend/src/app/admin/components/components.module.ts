import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { ReactiveFormsModule , FormsModule, Validators } from '@angular/forms';
import { AdminCarAddedModule } from './admin-car-added/admin-car-added.module';
import { AdminCarListModule } from './admin-car-list/admin-car-list.module';
import { AdminBrandListModule } from './admin-brand-list/admin-brand-list.module';
import { AdminColorListModule } from './admin-color-list/admin-color-list.module';
import { AdminBrandAddModule } from './admin-brand-add/admin-brand-add.module';
import { AdminColorAddModule } from './admin-color-add/admin-color-add.module';
import { AdminBrandUpdatedModule } from './admin-brand-updated/admin-brand-updated.module';
import { AdminColorUpdatedModule } from './admin-color-updated/admin-color-updated.module';
import { BrowserModule } from '@angular/platform-browser';
import { AdminCarAddImageModule } from './admin-car-add-image/admin-car-add-image.module';
import { AdminCarListImageComponent } from './admin-car-list-image/admin-car-list-image.component';
import { AdminCarListImageModule } from './admin-car-list-image/admin-car-list-image.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AdminHomeModule,
    AdminCarAddedModule,
    AdminCarListModule,
    AdminBrandListModule,
    AdminColorListModule,
    AdminBrandAddModule,
    AdminColorAddModule,
    AdminBrandUpdatedModule,
    AdminColorUpdatedModule,
    AdminCarAddImageModule,
    AdminCarListImageModule
    
    
  ]
})
export class ComponentsModule { }
