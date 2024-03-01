import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from '../../../services/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-color-updated',
  templateUrl: './admin-color-updated.component.html',
  styleUrl: './admin-color-updated.component.css'
})
export class AdminColorUpdatedComponent implements OnInit{
  colorUpdateForm: FormGroup = new FormGroup({});
  colors!: Category;
  
  constructor(private formBuilder: FormBuilder,  private activatedRoute: ActivatedRoute, private colorService: ColorService, private toastrService: ToastrService,private router:Router) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.GetColorId(params['id']);
      this.UpdateForm(this.colors);
    });

  }
  
  
  GetColorId(id: number): void {
    this.colorService.GetColorId(id).subscribe(response => {
      this.colors = Array.isArray(response.data) ? response.data[0] : response.data;
      this.UpdateForm(this.colors); 
    });
}
  
UpdateForm(colors: Category): void {
  this.colorUpdateForm = this.formBuilder.group({
    id: [colors?.id || '', Validators.required],
    name: [colors?.name || '', Validators.required]
  });
}

  add(): void {
    if (this.colorUpdateForm.valid) {
      let brandModel = Object.assign({}, this.colorUpdateForm.value)
      this.colorService.update(brandModel).subscribe(data => {
        this.toastrService.success("Renk Güncellendi", "Başarılı")
        this.router.navigate(['/admin/color']);
      }, responseError => {
        this.toastrService.error(responseError, "Hata")

      });
        
      }else {
        this.toastrService.error("Formunuz Eksik", "Dikkat")
      }
    } 
}
