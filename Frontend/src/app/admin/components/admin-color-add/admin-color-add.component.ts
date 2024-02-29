import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorService } from '../../../services/color.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-color-add',
  templateUrl: './admin-color-add.component.html',
  styleUrl: './admin-color-add.component.css'
})
export class AdminColorAddComponent implements OnInit{
  colorAddForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private colorService: ColorService, private toastrService: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required],
    });
  }

  add() {
    if (this.colorAddForm.valid) {
      let brandModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.create(brandModel).subscribe(data => {
        this.toastrService.success("Renk Eklendi", "Başarılı")
        this.router.navigate(['/admin/color']);
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
 