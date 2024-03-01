import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ToastrService } from 'ngx-toastr';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:7138';
  constructor(private httpClient: HttpClient,private toastrService: ToastrService) {}

  getAllCars():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "/Color/getall")
  }

  create(color:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Color/add",color)
  }

  delete(color: Category) {
    this.httpClient.post<ResponseModel>(this.apiUrl + "/Color/delete", color).subscribe(
      (response) => {
        window.location.reload();
      },
      (errorResponse) =>this.toastrService.success("Hata oluştu")
    );
  }

  GetColorId(id:number):Observable<SingleResponseModel<Category>> {
    return this.httpClient.get<SingleResponseModel<Category>>(this.apiUrl + "/Color/GetById/"+id);
  }

  update(color: Category) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Color/update",color)
  }
}
