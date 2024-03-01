import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({ 
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:7138';
  constructor(private httpClient: HttpClient,private toastrService:ToastrService) {}

  getAllCars():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "/Brand/getall")
  }

  create(brand:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Brand/add",brand)
  }

  delete(brand: Category) {
    this.httpClient.post<ResponseModel>(this.apiUrl + "/Brand/delete", brand).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) =>this.toastrService.success("Hata oluştu")
    );
  }

  GetBrandId(id:number):Observable<SingleResponseModel<Category>> {
    return this.httpClient.get<SingleResponseModel<Category>>(this.apiUrl + "/Brand/GetById/"+id);
  }

  update(brand: Category) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Brand/update",brand)
  }

} 
 