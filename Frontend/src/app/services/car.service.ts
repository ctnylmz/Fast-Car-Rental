import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from '../models/carDetail';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7138';

  constructor(private httpClient: HttpClient) {}

  getAllCars():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/getcardetails")
  }

  getAllBrand():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "/Brand/getall");
  }

  getAllColor():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "/Color/getall");
  }

  GetByBrandId(id:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/GetAllByCategoryId/"+id);
  }

  GetByColorId(id:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/GetAllByColorId/"+id);
  }


  GetCarId(id:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/GetCarId/"+id);
  }

  getCarsByColorAndBrand(brandId:number, colorId:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/getCarsByColorAndBrand/"+brandId+"/"+colorId);
  }
  create(carDetail:CarDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Car/add",carDetail)
  }
}
