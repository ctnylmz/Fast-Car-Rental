import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categorys: Category[] = [];

  currentCategory: Category = {
    id: 1,
    name: 'BMW',
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categorys = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item p-3 active';
    } else {
      return 'list-group-item p-3 ';
    }
  }
}
