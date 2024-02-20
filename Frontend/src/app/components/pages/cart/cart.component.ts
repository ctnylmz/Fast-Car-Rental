import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cardetails: CarDetail[] = [];
  baseUrl = 'https://localhost:7138/Uploads/Images/';
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars() {
    this.carService.GetByBrandId(3).subscribe((response) => {
      this.cardetails = response.data;
    });
  }

}
