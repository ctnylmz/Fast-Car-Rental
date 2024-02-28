import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../../models/carDetail';
import { Category } from '../../../models/category';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cardetails: CarDetail[] = [];
  brand: Category[] = [];
  color: Category[] = [];

  brandFilter: number = 0; 
  colorFilter: number = 0;
  filterText: string = '';

  baseUrl = 'https://localhost:7138/Uploads/Images/';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllCars();
    this.getAllBrand();
    this.getAllColor();
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getAllBrand() {
    this.carService.getAllBrand().subscribe((response) => {
      this.brand = response.data;
    });
  }

  getAllColor() {
    this.carService.getAllColor().subscribe((response) => {
      this.color = response.data;
    });
  }

  getCarsByColorAndBrand(brandId: number, colorId: number) {
    if (brandId == 0 && colorId == 0) {
      this.getAllCars();
    } else if (brandId != 0 && colorId == 0) {
      this.getCarsByBrand(brandId);
    } else if (brandId == 0 && colorId != 0) {
      this.getCarsByColor(colorId);
    }else if(brandId != 0 && colorId != 0){
      this.carService.getCarsByColorAndBrand(brandId,colorId).subscribe((response) => {
        this.cardetails = response.data;
      });
    }
  }

  getCarsByBrand(id: number) {
    this.carService.GetByBrandId(id).subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getCarsByColor(id: number) {
    this.carService.GetByColorId(id).subscribe((response) => {
      this.cardetails = response.data;
    });
  }




}
