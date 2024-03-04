import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';
import { CartItem } from '../../../models/cartItem';
import { CartService } from '../../../services/cart.service';
import { CartItems } from '../../../models/cartItems';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems:CartItem[] = [];

  totalFilter: number = 0;

  baseUrl = 'https://localhost:7138/Uploads/Images/';
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.cartToList();
    this.isAuthenticated();
  }

  cartToList(): void {
    this.cartItems =  this.cartService.listToCart();
    this.cartItems.forEach(item => {
      item.totalamount = this.cartService.calculateTotalAmount(item);
      this.totalFilter += item.totalamount; 
    });
  }
  

  cartToDelete(carId: number): void {
    let item = this.cartItems.find(c => c.carDetail?.carId === carId);
    if (item && item.carDetail) {
      this.cartService.deleteToCart(carId);
      this.totalFilter -= item.carDetail.dailyPrice;
    }
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
    } else {
      this.router.navigate(['admin']);
    }
  }
  
  cartAdd() {
    const email = localStorage.getItem('email');
    const carId = this.cartItems[0].carDetail?.carId;

    const carOperation = {
      email: email,
      carId: carId
    };

    this.carService.AddDefaultCars(carOperation).subscribe(
      data => {
        this.toastrService.success("Araç Satın Alındı", "Başarılı");
        this.router.navigate(['/admin']);
      },
      error => {
        this.toastrService.error(error, "Hata");
      }
    );
}


}
