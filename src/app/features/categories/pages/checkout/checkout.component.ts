import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  data: Cart[];
  totalPrice: number;

  constructor() {}

  ngOnInit() {
    this.data = history.state.data;
    this.totalPrice = this.data.reduce((previous, current) => previous + +current.price * current.quantity, 0);
  }
}
