import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../../models/car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService , private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        if(params["id"]){
          this.GetAllByCategoryId(params["id"])
        }else{
          this.getCars()
        }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  GetAllByCategoryId(id:number) {
    this.carService.GetAllByCategoryId(id).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
