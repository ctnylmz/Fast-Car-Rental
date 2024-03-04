import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDefaultListComponent } from './admin-default-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminDefaultListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminDefaultListComponent}
    ])
  ]
})
export class AdminDefaultListModule { }
