import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminColorAddComponent } from './admin-color-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminColorAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:AdminColorAddComponent}
    ])
  ]
})
export class AdminColorAddModule { }
