import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarListImageComponent } from './admin-car-list-image.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminCarListImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminCarListImageComponent}
    ])
  ]
})
export class AdminCarListImageModule { }
