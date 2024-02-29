import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBrandListComponent } from './admin-brand-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminBrandListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AdminBrandListComponent}
    ])
    
  ]
})
export class AdminBrandListModule { }
