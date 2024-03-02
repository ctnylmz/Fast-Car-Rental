import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-car-add-image',
  templateUrl: './admin-car-add-image.component.html',
  styleUrl: './admin-car-add-image.component.css'
})
export class AdminCarAddImageComponent implements OnInit {
  cardetails: CarDetail[] = [];
  selectedFile: File | undefined;
  carForm!: FormGroup;
  baseUrl = 'https://localhost:7138/Uploads/Images/';
  constructor(
    private carService: CarService,
  ) {}

  ngOnInit(): void {
    this.uploadImage()
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.carService.addImage(7, this.selectedFile).subscribe(
        response => {
          console.log('Resim başarıyla yüklendi.', response);
        },
        error => {
          console.error('Resim yüklenirken bir hata oluştu:', error);
        }
      );
    } else {
      console.error('Lütfen bir dosya seçin.');
    }
  }

 

}
