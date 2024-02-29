import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'app-admin-color-list',
  templateUrl: './admin-color-list.component.html',
  styleUrl: './admin-color-list.component.css'
})
export class AdminColorListComponent implements OnInit{
  colors: Category[] = [];

  constructor(private colorService:ColorService){}
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.colorService.getAllCars().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
