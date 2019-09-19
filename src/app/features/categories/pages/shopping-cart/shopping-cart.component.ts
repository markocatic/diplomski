import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { CategoriesService } from '../../services/categories.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  user_id: number;
  carts: Cart[];
  productId: number;
  quantityControl = new FormControl('', [Validators.max(100), Validators.min(1)]);

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

  getProductId(product_id: number) {
    this.productId = product_id;
    console.log(this.productId);
  }

  editCart(product_id: number) {
    console.log(product_id, 'product id');
    console.log(this.quantityControl.value, 'quantity');
    this.categoriesService.editCartItem(product_id, this.quantityControl.value).subscribe((response: number) => {
      console.log(response);
    });
  }
}
