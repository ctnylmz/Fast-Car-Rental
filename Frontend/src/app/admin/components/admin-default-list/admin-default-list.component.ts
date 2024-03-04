import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-default-list',
  templateUrl: './admin-default-list.component.html',
  styleUrl: './admin-default-list.component.css'
})
export class AdminDefaultListComponent implements OnInit {
  carsId!: number[] ;
  cardetails: CarDetail[] = [];
  baseUrl = 'https://localhost:7138/Uploads/Images/';
  

  constructor( 
    private carService: CarService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.GetDefaultCars(localStorage.getItem('email') || "");
  }

  GetDefaultCars(email: string) {
    this.carService.GetDefaultCars(email).subscribe((response) => {
      this.carsId = response.data.map((car: any) => car.carId);
      
      this.carsId.forEach((carId: number) => {
        this.carService.GetCarId(carId).subscribe((response) => {
          this.cardetails.push(...response.data);
         
        });
      });
    });
  }
  



}
