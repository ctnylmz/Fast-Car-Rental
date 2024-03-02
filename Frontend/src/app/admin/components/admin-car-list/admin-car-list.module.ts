import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarListComponent } from './admin-car-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AdminCarListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {path:"",component:AdminCarListComponent}
    ])
  ]
})
export class AdminCarListModule { }
