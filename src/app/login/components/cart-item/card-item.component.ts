import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() cardItem: CardItem;

  constructor() {}

  ngOnInit(): void {}
}

export interface CardItem {
  imageUrl?: string;
  name?: string;
  price?: number;
  quantity?: number;
}
