import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  carDetail:CarDetail[] = [];
  
  constructor() {}

  ngOnInit(): void {}
}
