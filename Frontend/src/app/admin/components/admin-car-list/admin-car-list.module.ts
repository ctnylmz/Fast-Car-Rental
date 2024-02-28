import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarListComponent } from './admin-car-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminCarListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminCarListComponent}
    ])
  ]
})
export class AdminCarListModule { }
