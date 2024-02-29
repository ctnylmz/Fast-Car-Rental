import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminColorListComponent } from './admin-color-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminColorListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminColorListComponent}
    ])
  ]
})
export class AdminColorListModule { }
