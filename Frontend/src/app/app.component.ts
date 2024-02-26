import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  hideNavi: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Eğer güncel rotanın başında "/admin" içeriyorsa, app-navi'yi gizle
        this.hideNavi = event.url.startsWith('/admin');
      }
    });
  }

  onActivate(event: any) {
    // activate event'i burada işleyebilirsiniz
  }
}

