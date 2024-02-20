import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../services/car.service';
import { CarDetail } from '../../../models/carDetail';

@Component({
  selector: 'app-car-detial',
  templateUrl: './car-detial.component.html',
  styleUrl: './car-detial.component.css',
})
export class CarDetialComponent implements OnInit {
  cardetails: CarDetail[] = [];

  baseUrl = 'https://localhost:7138/Uploads/Images/';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        this.GetCarId(params['id']);
    });
  }

  GetCarId(id: number) {
    this.carService.GetCarId(id).subscribe((response) => {
      this.cardetails = response.data;
    });
  }
}
