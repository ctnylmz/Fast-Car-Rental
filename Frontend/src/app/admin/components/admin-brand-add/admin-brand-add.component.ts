import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from '../../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-brand-add',
  templateUrl: './admin-brand-add.component.html',
  styleUrl: './admin-brand-add.component.css'
})
export class AdminBrandAddComponent implements OnInit{
  brandAddForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private brandService: BrandService, private toastrService: ToastrService,private router:Router) { }

  ngOnInit(): void { 
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ["", Validators.required],
    });
  }
 
  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value)
      this.brandService.create(brandModel).subscribe(data => {
        this.toastrService.success("Marka Eklendi", "Başarılı")
        this.router.navigate(['/admin/brand']);
      }, responseError => {
        if (responseError.error.message && responseError.error.message.length > 0) {
        this.toastrService.error(responseError.error.message, "Doğrulama Hatası")
       }else if(responseError.error.Errors[0] && responseError.error.Errors[0] > 0){
        this.toastrService.error(responseError.error.Errors[0].ErrorMessage, "Doğrulama Hatası")
      }else{
      this.toastrService.error("Formunuz Eksik", "Dikkat")
      }
        
      });

    } else {
      this.toastrService.error("Formunuz Eksik", "Dikkat")
    }
  }
}
