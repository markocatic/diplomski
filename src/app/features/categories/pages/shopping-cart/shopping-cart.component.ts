import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { CategoriesService } from '../../services/categories.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  user_id: number;
  carts: Cart[];

  constructor(private categoriesService: CategoriesService, private tokenService: TokenService) {}

  ngOnInit() {
    this.user_id = +this.tokenService.getUser();
    this.categoriesService.getCartItems(this.user_id).subscribe((response: Cart[]) => {
      console.log(response, 'CART COMPONENT ITEMS');
      this.carts = response;
    });
  }

  removeFromCart(id: number) {
    this.categoriesService.deleteCartItem(id).subscribe((response: Cart) => {
      console.log(response, 'deleted item from cart');
      this.categoriesService.getCartItems(this.user_id).subscribe((response: Cart[]) => {
        console.log(response, 'CART');
        this.carts = response;
        this.categoriesService.toRefreshNavigation(true);
      });
    });
  }
}
