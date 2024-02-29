import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { BrandService } from '../../../services/brand.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-brand-list',
  templateUrl: './admin-brand-list.component.html',
  styleUrl: './admin-brand-list.component.css'
})
export class AdminBrandListComponent implements OnInit{
  brands: Category[] = [];

  constructor(private brandService:BrandService,private router: Router,private toastrService : ToastrService){}
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.brandService.getAllCars().subscribe((response) => {
      this.brands = response.data;
    });
  }

  brandAdd() {
    this.router.navigate(['admin/brand/add']);
    
  }

  delete(brand:Category) {
    this.brandService.delete(brand); 
  }
  
  
}
