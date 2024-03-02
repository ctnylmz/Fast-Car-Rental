import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-admin-car-list-image',
  templateUrl: './admin-car-list-image.component.html',
  styleUrl: './admin-car-list-image.component.css'
})
export class AdminCarListImageComponent implements OnInit {
  cardetails: CarDetail[] = [];
  baseUrl = 'https://localhost:7138/Uploads/Images/';
  
  constructor(
    private carService: CarService,
  ) {}
 
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.GetNullImage().subscribe((response) => {
      this.cardetails = response.data;
    });
  }
}
