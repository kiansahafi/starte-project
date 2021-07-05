import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private router: Router, private productservice: ProductService) {}
  products = [];
  ngOnInit(): void {
    this.productservice.getgoods().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  sendToProductPage(index: any) {
    // console.log(this.products[index]);
    this.productservice.setProduct = this.products[index];

    this.router.navigate(['Product-Page'], {
      queryParams: { name: this.products[index].name },
    });
  }
}
