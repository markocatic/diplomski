import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [
    { name: '123', description: 'asdasd', price: 1231 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 },
    { name: '123', description: 'asdasd', price: 123 }
  ];

  dataSource = new MatTableDataSource<Product>(this.products);
  displayedColumns: string[] = ['name', 'description', 'price'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
