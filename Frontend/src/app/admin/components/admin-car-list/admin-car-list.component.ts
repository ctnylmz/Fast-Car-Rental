import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-admin-car-list',
  templateUrl: './admin-car-list.component.html',
  styleUrl: './admin-car-list.component.css'
})
export class AdminCarListComponent implements OnInit{
  cardetails: CarDetail[] = [];
  baseUrl = 'https://localhost:7138/Uploads/Images/';
  
  constructor(
    private carService: CarService,
  ) {}
 
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cardetails = response.data;
    });
  }
}
