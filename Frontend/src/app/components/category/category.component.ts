import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  brand: Category[] = [];
  color: Category[] = [];


  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getBrand();
    this.getColor();
  }

  getBrand() {
    this.categoryService.getBrand().subscribe((response) => {
      this.brand = response.data;
    });
  }

  getColor() {
    this.categoryService.getColor().subscribe((response) => {
      this.color = response.data;
    });
  }

  setCurrentCategory(categoryName?: string) {
    if (!categoryName) {
      return; // Handle potential null values here
    }
    // ...your logic using categoryName
  }

  
}
