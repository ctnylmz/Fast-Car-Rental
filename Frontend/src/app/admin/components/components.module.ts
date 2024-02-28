import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { ReactiveFormsModule , FormsModule, Validators } from '@angular/forms';
import { AdminCarAddedModule } from './admin-car-added/admin-car-added.module';
import { AdminCarListModule } from './admin-car-list/admin-car-list.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminHomeModule,
    AdminCarAddedModule,
    AdminCarListModule
    
    
  ]
})
export class ComponentsModule { }
