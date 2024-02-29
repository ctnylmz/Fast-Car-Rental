import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  user!:User

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.getUserById();
  }

  getUserById(){
    this.authService.getUserById(1)
      .subscribe(response=>{
        this.user = response.data
        localStorage.setItem("userName",this.user.firstName+" "+this.user.lastName)
     });
  }
  
  logout() {
    this.authService.logout();
  }


}

