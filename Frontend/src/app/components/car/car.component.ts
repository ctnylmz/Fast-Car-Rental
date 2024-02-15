import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { CarDetail } from '../../models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cardetails:CarDetail[]=[];
  cars: Car[] = [];
  baseUrl="https://localhost:7138/Uploads/Images/";
  filter = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.GetAllByCategoryId(params['id']);
      } else {
        this.getAllCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  GetAllByCategoryId(id: number) {
    this.carService.GetAllByCategoryId(id).subscribe((response) => {
      this.cars = response.data;
    });
  }

  addToCart(car: Car) {
    this.toastrService.success('Add To Cart  ', car.name);
    this.cartService.addToCart(car);
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cardetails = response.data;
    });
  }

}
