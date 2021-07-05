import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CardItem } from '../cart-item/card-item.component';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.scss'],
})
export class ShoppingCartViewComponent implements OnInit {
  cardItem: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.productSrv.getProductCart.subscribe((data) => {
      console.log(data);

      this.cardItem.push(data);
      console.log(this.cardItem);
    });

    if (!this.cardItem[0].name) {
      this.cardItem.shift();
    }
  }
}
