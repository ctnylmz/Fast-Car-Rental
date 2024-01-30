import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categorys: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categorys = response.data;
    });
  }
}
 