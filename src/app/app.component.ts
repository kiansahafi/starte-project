import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AlertService } from './core/alert';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starter-project';
  products = [];

  constructor(
    private router: Router,
    private productservice: ProductService,
    private alert: AlertService
  ) {}

  onCard() {
    this.router.navigate(['/Cart']);
  }

  ngOnInit(): void {
    this.alert.showSnackbar('Wellcome To My Website!😁', 'SUCCESS', 3000);
    this.productservice.getgoods().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  sendToProductPage(productId: any) {
    this.router.navigate(['Product-Page', productId]);
  }
  trasferProducts() {
    this.router.navigate(['product-list']);
  }
  showsignin(): boolean {
    return localStorage.getItem('token') ? false : true;
  }
  LogOut() {
    localStorage.clear();
  }
}
