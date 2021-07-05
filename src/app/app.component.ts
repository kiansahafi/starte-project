import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starter-project';
  products = [];

  constructor(private router: Router, private productservice: ProductService) {}

  onCard() {
    this.router.navigate(['/Cart']);
  }

  ngOnInit(): void {
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
}
