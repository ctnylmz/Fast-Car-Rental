import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarUpdatedComponent } from './admin-car-updated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminCarUpdatedComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminCarUpdatedComponent}
    ])
  ]
})
export class AdminCarUpdatedModule { }
