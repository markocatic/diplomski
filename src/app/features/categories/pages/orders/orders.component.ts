import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { CategoriesService } from '../../services/categories.service';
import { Order } from 'src/app/shared/models/order.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  user_id: number;
  order: Order[];

  constructor(
    private tokenService: TokenService,
    private categoriesService: CategoriesService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.user_id = +this.tokenService.getUser();
    this.categoriesService.getUserTransactions(this.user_id).subscribe((response: Order[]) => {
      this.order = response;
      console.log(this.order, 'orders');
    });
  }
}
