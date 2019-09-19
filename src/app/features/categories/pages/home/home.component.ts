import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Product } from 'src/app/shared/models/product.model';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user_id: number;
  newProducts: Product[];

  constructor(private categoriesService: CategoriesService, private tokenService: TokenService) {}

  ngOnInit() {
    this.user_id = +this.tokenService.getUser();
    this.categoriesService.getNewProducts().subscribe((response: Product[]) => {
      console.log('new products', response);
      this.newProducts = response;
    });
  }

  insertWishlist(product_id: number) {
    this.categoriesService.insertWishlist(this.user_id, product_id).subscribe((response: boolean) => {
      console.log(response, 'wishlist inserted');
      this.categoriesService.toRefreshNavigation(true);
    });
  }

  addToCart(product_id: number, quantity?: number) {
    this.categoriesService
      .addCartItem(this.user_id, product_id, quantity ? quantity : 1)
      .subscribe((response: Cart) => {
        console.log(response);
        this.categoriesService.toRefreshNavigation(true);
      });
  }
}
