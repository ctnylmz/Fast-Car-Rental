import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminColorUpdatedComponent } from './admin-color-updated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminColorUpdatedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:AdminColorUpdatedComponent}
    ])
  ]
})
export class AdminColorUpdatedModule { }
