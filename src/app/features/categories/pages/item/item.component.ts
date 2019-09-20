import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { FormControl, Validators } from '@angular/forms';
import { TokenService } from 'src/app/shared/services/token.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Product;
  user_id: string;
  productId: number;
  loggedIn: boolean;
  quantityControl = new FormControl(0, [Validators.max(100), Validators.min(1)]);

  constructor(
    private categoriesService: CategoriesService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.authStatus.subscribe(value => (this.loggedIn = value));
    console.log(this.loggedIn, 'logged');
    this.route.params.subscribe(response => {
      this.productId = +response['id'];
    });
    this.user_id = this.tokenService.getUser();
    this.categoriesService.getOneProduct(this.productId).subscribe((response: Product) => {
      this.item = response;
      console.log(this.item, 'GET ONE ITEM');
      console.log(this.item.image_path, 'IMAGE PATH');
    });
  }

  changeQuantity(math: string) {
    let qty = +this.quantityControl.value;

    math === '+' ? this.quantityControl.patchValue(++qty) : this.quantityControl.patchValue(--qty);
    console.log(qty);
  }

  addToCart(product_id: number) {
    this.categoriesService
      .addCartItem(+this.user_id, this.productId, this.quantityControl.value)
      .subscribe((response: Cart) => {
        console.log(response);
        this.categoriesService.toRefreshNavigation(true);
      });
  }

  insertWishlist(product_id: number) {
    console.log(+this.user_id);
    console.log(product_id);
    this.categoriesService.insertWishlist(+this.user_id, product_id).subscribe((response: boolean) => {
      console.log(response, 'wishlist inserted');
      this.categoriesService.toRefreshNavigation(true);
    });
  }
}
