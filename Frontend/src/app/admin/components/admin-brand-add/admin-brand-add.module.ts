import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBrandAddComponent } from './admin-brand-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminBrandAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:AdminBrandAddComponent}
    ])
    
  ]
})
export class AdminBrandAddModule { }
