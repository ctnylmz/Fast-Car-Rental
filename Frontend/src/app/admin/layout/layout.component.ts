import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout() {
    this.authService.logout();
  }

}
