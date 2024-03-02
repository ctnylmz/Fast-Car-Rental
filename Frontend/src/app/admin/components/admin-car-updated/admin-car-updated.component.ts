import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarDetail } from '../../../models/carDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-car-updated',
  templateUrl: './admin-car-updated.component.html',
  styleUrl: './admin-car-updated.component.css',
})
export class AdminCarUpdatedComponent implements OnInit {
  CarUpdateForm: FormGroup = new FormGroup({});
  cardetails: CarDetail[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.GetCarId(params['id']);
      this.UpdateForm(this.cardetails[0]);
    });
  }

  UpdateForm(cars: CarDetail): void {
    this.CarUpdateForm = this.formBuilder.group({
      id: [cars?.carId || '', Validators.required],
      brandId: [cars?.brandId || '', Validators.required],
      colordId: [cars?.colorId || '', Validators.required],
      name: [cars?.carName || '', Validators.required],
      modelYear: [cars?.modelYear || '', Validators.required],
      dailyPrice: [cars?.dailyPrice || '', Validators.required],
      description: [cars?.description || '', Validators.required],
    });
  }

  GetCarId(id: number): void {
    this.carService.GetCarId(id).subscribe((response) => {
      this.cardetails = response.data;
      console.log(this.cardetails[0]);
      this.UpdateForm(this.cardetails[0]);
    });
  }

  add(): void {
    if (this.CarUpdateForm.valid) {
      let carModel = Object.assign({}, this.CarUpdateForm.value);
      this.carService.update(carModel).subscribe(
        (data) => {
          this.toastrService.success('Araç Güncellendi', 'Başarılı');
          this.router.navigate(['/admin/cars']);
        },
        (responseError) => {
          this.toastrService.error(responseError, 'Hata');
        }
      );
    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat');
    }
  }
}
