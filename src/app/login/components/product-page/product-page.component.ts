import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  @Input() Item;
  productInfo: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProduct.subscribe((data) => {
      console.log(data);
      this.productInfo = data;
    });
  }
  addToCart() {
    this.productService.setProductCart = { ...this.productInfo, quantity: 5 };
  }
}
