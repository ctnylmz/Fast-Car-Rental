import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-car-add-image',
  templateUrl: './admin-car-add-image.component.html',
  styleUrl: './admin-car-add-image.component.css',
})
export class AdminCarAddImageComponent implements OnInit {
  id!: number;
  selectedFile: File | undefined;
  baseUrl = 'https://localhost:7138/Uploads/Images/';
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.uploadImage(params['id']);
    });
    
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(id: number): void {
    if (this.selectedFile) {
      this.carService.addImage(id, this.selectedFile).subscribe(
        (response) => {
          this.toastrService.success("Resim başarıyla yüklendi", "Başarılı")
          this.router.navigate(['/admin/cars']);
        },
        (error) => {
          console.error('Resim yüklenirken bir hata oluştu:', error);
        }
      );
    } else {
     console.log("Resim Gelmedi")
    }
  }
}
