import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from '../models/carDetail';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7138';

  constructor(private httpClient: HttpClient) {}

  getAllCars():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/getcardetails")
  }

  GetAllByCategoryId(id:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/GetAllByCategoryId/"+id);
  }

  getBrand():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "/Brand/getall");
  }

  getColor():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "/Color/getall");
  }

}
