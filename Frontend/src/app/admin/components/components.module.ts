import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { ReactiveFormsModule , FormsModule, Validators } from '@angular/forms';
import { AdminCarAddedModule } from './admin-car-added/admin-car-added.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AdminHomeModule,
    AdminCarAddedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ComponentsModule { }
