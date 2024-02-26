import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AdminHeaderComponent,
  ]
})
export class ComponentsModule { }
