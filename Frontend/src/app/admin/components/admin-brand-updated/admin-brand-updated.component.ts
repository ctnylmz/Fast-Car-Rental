import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from '../../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-admin-brand-updated',
  templateUrl: './admin-brand-updated.component.html',
  styleUrl: './admin-brand-updated.component.css'
})
export class AdminBrandUpdatedComponent implements OnInit{ 
  brandUpdateForm: FormGroup = new FormGroup({});
  brands!: Category;
  
  constructor(private formBuilder: FormBuilder,  
    private activatedRoute: ActivatedRoute, 
    private brandService: BrandService, 
    private toastrService: ToastrService,
    private router:Router) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.GetBrandId(params['id']);
      this.UpdateForm(this.brands);
    });

  }
  
  
  GetBrandId(id: number): void {
    this.brandService.GetBrandId(id).subscribe(response => {
      this.brands = Array.isArray(response.data) ? response.data[0] : response.data;
      this.UpdateForm(this.brands); 
    });
}
  
UpdateForm(brands: Category): void {
  this.brandUpdateForm = this.formBuilder.group({
    id: [brands?.id || '', Validators.required],
    name: [brands?.name || '', Validators.required]
  });
}

  add(): void {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(data => {
        this.toastrService.success("Marka Güncellendi", "Başarılı")
        this.router.navigate(['/admin/brand']);
      }, responseError => {
        this.toastrService.error(responseError, "Hata")

      });
        
      }else {
        this.toastrService.error("Formunuz Eksik", "Dikkat")
      }
    } 

 
  }

  
  


