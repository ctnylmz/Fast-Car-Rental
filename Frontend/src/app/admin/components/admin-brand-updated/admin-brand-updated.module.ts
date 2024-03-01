import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBrandUpdatedComponent } from './admin-brand-updated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminBrandUpdatedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:AdminBrandUpdatedComponent}
    ])
  ]
})
export class AdminBrandUpdatedModule { }
