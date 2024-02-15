import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7138';


    constructor(private httpClient: HttpClient) {}

    login(loginModel:LoginModel) {
      return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/api/Auth/login",loginModel);
    }

    isAuthenticated(){
      if(localStorage.getItem("token")){
        return true;
      }else{
        return false;
      }
    }
}
