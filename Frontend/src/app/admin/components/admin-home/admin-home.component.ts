import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{


    constructor(
      private router: Router
    ) {}

  ngOnInit(): void {
    if(localStorage.getItem('Role') != "admin"){
      this.router.navigate(['admin/default']);
    }
  }
  
}
 