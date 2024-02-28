import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-car-added',
  templateUrl: './admin-car-added.component.html',
  styleUrl: './admin-car-added.component.css'
})
export class AdminCarAddedComponent implements OnInit{
  carAddForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required], // Renk Id'si "colordId" değil, "colorId" olmalı
      name: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  add(){
   let carModel = Object.assign({},this.carAddForm.value)
  }

}
