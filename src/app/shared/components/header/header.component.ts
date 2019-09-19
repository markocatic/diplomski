import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { CategoriesService } from 'src/app/features/categories/services/categories.service';
import { Cart } from '../../models/cart.model';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user_id: number;
  carts: Cart[];
  cartNumber: number;
  cartPrice: number;
  wishlist: Product[];
  wishlistNumber: number;
  checkedOut;

  constructor(
    private router: Router,
    private auth: AuthService,
    private token: TokenService,
    private categoryService: CategoriesService
  ) {}

  public loggedIn: boolean;

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
    console.log(this.loggedIn);
    this.user_id = +this.token.getUser();
    this.categoryService.getCartItems(this.user_id).subscribe((response: Cart[]) => {
      console.log(response, 'CART');
      this.carts = response;
      this.cartNumber = this.carts.length;
      this.cartPrice = this.carts.reduce((previous, current) => previous + +current.price * current.quantity, 0);
      console.log(this.cartPrice, 'PRICE');
    });
    this.categoryService.refreshNavigation$.subscribe((response: boolean) => {
      console.log(response, 'REFRESH NAV');
      this.categoryService.getCartItems(this.user_id).subscribe((response: Cart[]) => {
        console.log(response, 'CART');
        this.carts = response;
        this.cartNumber = this.carts.length;
        this.cartPrice = this.carts.reduce((previous, current) => previous + +current.price * current.quantity, 0);
        console.log(this.cartPrice, 'PRICE');
      });
      this.categoryService.getWishlist(this.user_id).subscribe((response: Product[]) => {
        console.log('wishlist', response);
        console.log('user id', this.user_id);
        this.wishlist = response;
        this.wishlistNumber = response.length;
      });
    });

    this.categoryService.getWishlist(this.user_id).subscribe((response: Product[]) => {
      console.log('wishlist', response);
      console.log('user id', this.user_id);
      this.wishlist = response;
      this.wishlistNumber = response.length;
    });
  }

  logout(event: MouseEvent) {
    event.preventDefault;
    this.token.remove();
    this.token.removeUser();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }

  deleteFromCart(id: number) {
    event.stopPropagation();
    this.categoryService.deleteCartItem(id).subscribe((response: Cart) => {
      console.log(response, 'deleted item from cart');
      this.categoryService.getCartItems(this.user_id).subscribe((response: Cart[]) => {
        console.log(response, 'CART');
        this.carts = response;
        this.cartNumber = this.carts.length;
        this.cartPrice = this.carts.reduce((previous, current) => previous + +current.price * current.quantity, 0);
        console.log(this.cartPrice, 'PRICE');
      });
    });
  }

  deleteWishlist(product_id: number) {
    this.categoryService.deleteWishList(product_id, this.user_id).subscribe((response: boolean) => {
      console.log(response, 'wishlist deleted');
      this.categoryService.getWishlist(this.user_id).subscribe((response: Product[]) => {
        console.log('wishlist', response);
        console.log('user id', this.user_id);
        this.wishlist = response;
        this.wishlistNumber = response.length;
      });
    });
  }

  checkout() {
    this.categoryService.checkout(this.user_id).subscribe(response => {
      console.log(response, 'checked out items');
      this.checkedOut = response;
      this.categoryService.getCartItems(this.user_id).subscribe((response: Cart[]) => {
        console.log(response, 'CART');
        this.carts = response;
        this.cartNumber = this.carts.length;
        this.cartPrice = this.carts.reduce((previous, current) => previous + +current.price * current.quantity, 0);
        console.log(this.cartPrice, 'PRICE');
      });
      this.router.navigate(['/checkout'], { state: { data: response } });
    });
  }
}
