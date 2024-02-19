import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarDetail } from '../../models/carDetail';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car';
import { Category } from '../../models/category';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  
  cardetails:CarDetail[] = [];
  brand: Category[] = [];
  color: Category[] = [];

  filterText: string = '';

  baseUrl="https://localhost:7138/Uploads/Images/";

  constructor( private carService: CarService , private activatedRoute: ActivatedRoute,) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.GetAllByCategoryId(params['id']);
      } else {
        this.getAllCars();
        this.getBrand();
        this.getColor();
      }
    });
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  GetAllByCategoryId(id: number) {
    this.carService.GetAllByCategoryId(id).subscribe((response) => {
      this.cardetails = response.data;
    });
  }

   getBrand() {
    this.carService.getBrand().subscribe((response) => {
      this.brand = response.data;
    });
  }

  getColor() {
    this.carService.getColor().subscribe((response) => {
      this.color = response.data;
    });
  }
 
}
