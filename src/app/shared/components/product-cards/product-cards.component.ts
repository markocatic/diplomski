import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {
    this.product = new Product(1, 'nokia', 'marko', 'short desc', 'opis', 12112, '');
  }
}
