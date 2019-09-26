import { Component, OnInit } from '@angular/core';
import { TransactionsAdminService } from '../../services/transactions-admin.service';
import { Order } from 'src/app/shared/models/order.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  orders: Order[];
  pageOfItems: Array<any>;

  constructor(private transactionService: TransactionsAdminService, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.transactionService.getOrders().subscribe((response: Order[]) => {
      console.log('orders', response);
      this.orders = response;
    });
  }

  deleteOrder(orderId: number) {
    this.transactionService.deleteOrder(orderId).subscribe((response: Order) => {
      console.log(response, 'order deleted');
      this.transactionService.getOrders().subscribe((response: Order[]) => {
        console.log('orders', response);
        this.orders = response;
      });
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
