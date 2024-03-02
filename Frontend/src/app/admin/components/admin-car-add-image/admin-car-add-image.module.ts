import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarAddImageComponent } from './admin-car-add-image.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminCarAddImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:AdminCarAddImageComponent}
    ])
    
  ]
})
export class AdminCarAddImageModule { }
