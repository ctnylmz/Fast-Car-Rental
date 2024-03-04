import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-car-list',
  templateUrl: './admin-car-list.component.html',
  styleUrl: './admin-car-list.component.css'
})
export class AdminCarListComponent implements OnInit {
  cardetails: CarDetail[] = [];
  cars!: Car;
  baseUrl = 'https://localhost:7138/Uploads/Images/';

  constructor( 
    private carService: CarService,
    private toastrService: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  Delete(car: CarDetail) {
    const carToDelete: Car = {
      id: car.carId,
      brandId: car.brandId,
      colordId: car.colorId,
      name: car.carName,
      modelYear: car.modelYear,
      dailyPrice: car.dailyPrice,
      description: car.description
    };

    this.carService.delete(carToDelete).subscribe(data => {
      this.toastrService.error('Araç Silindi', 'Başarılı');
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }, responseError => {
      this.toastrService.error(responseError, "Hata")
    });
  }

}

  
