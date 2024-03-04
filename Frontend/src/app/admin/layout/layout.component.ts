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
  user!: User;
  role: string | null = '';

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    const email = localStorage.getItem('email');
    this.authService.getEmail(email || '').subscribe((response) => {
      this.user = response.data;

      this.authService
        .GetByOperationClaimId(this.user.id)
        .subscribe((response) => {
          localStorage.setItem('Role', response.data.name);
          this.role = response.data.name;
        });
    });
  }

  logout() {
    this.authService.logout();
  }
}
