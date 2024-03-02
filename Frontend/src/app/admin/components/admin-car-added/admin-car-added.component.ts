import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../../services/car.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-car-added',
  templateUrl: './admin-car-added.component.html',
  styleUrl: './admin-car-added.component.css'
})
export class AdminCarAddedComponent implements OnInit {
  carAddForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router,private carService: CarService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      ColordId: ["", Validators.required], 
      name: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value)
      this.carService.create(carModel).subscribe(data => {
        this.toastrService.success("Ürün Eklendi", "Başarılı")
        this.router.navigate(['/admin/cars']);
      }, responseError => {
        console.log(responseError)
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
