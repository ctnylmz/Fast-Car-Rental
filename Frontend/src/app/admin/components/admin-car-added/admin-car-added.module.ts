import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarAddedComponent } from './admin-car-added.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminCarAddedComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminCarAddedComponent}
    ])
  ]
})
export class AdminCarAddedModule { }
 