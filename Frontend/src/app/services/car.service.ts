import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { CarDetail } from '../models/carDetail';
import { Observable, catchError, throwError } from 'rxjs';
import { Category } from '../models/category';
import { ResponseModel } from '../models/responseModel';
import { Car } from '../models/car';
import { carOperation } from '../models/carOperation';

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

  GetNullImage():Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "/Car/GetNullImage");
  }
  
 
  addImage(carId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('carId', carId.toString());
    formData.append('file', file, file.name);

    return this.httpClient.post(`${this.apiUrl}/api/CarImages/add`, formData).pipe(
      catchError(error => {
        return throwError(error); // Hata durumunda hatayı yeniden fırlat
      })
    );
  }

  update(Cars: CarDetail) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Car/update",Cars)
  }

  delete(Cars: Car) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/Car/Delete",Cars)
  }
  
  GetDefaultCars(email:string):Observable<ListResponseModel<carOperation>> {
    return this.httpClient.get<ListResponseModel<carOperation>>(this.apiUrl + "/Car/GetDefaultCars/"+email);
  }

}
