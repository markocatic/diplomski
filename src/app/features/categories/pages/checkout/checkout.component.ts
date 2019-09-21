import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  data: Cart[];
  totalPrice: number;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.data = history.state.data;
    this.totalPrice = this.data.reduce((previous, current) => previous + +current.price * current.quantity, 0);
  }
}
