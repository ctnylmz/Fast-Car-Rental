import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7138';

    
    constructor(private httpClient: HttpClient,private router: Router,  private toastrService: ToastrService,) {}

  login(login:Login){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/api/Auth/login",login)
  }

  getUserById(userId:number):Observable<SingleResponseModel<User>>{
    return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl + "/api/Auth/userId/" + userId);
  }

  getEmail(email: string): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(`https://localhost:7138/api/Auth/Email?email=${email}`);
  }
  GetByOperationClaimId(id:number):Observable<SingleResponseModel<Category>> {
    return this.httpClient.get<SingleResponseModel<Category>>(this.apiUrl + "/api/Auth/GetByOperationClaimId/"+id);
  }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.router.navigate(['']);
    setTimeout(() => {
      window.location.reload();
  }, 1);
  }


}
