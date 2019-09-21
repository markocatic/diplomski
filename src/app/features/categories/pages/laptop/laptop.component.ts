import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { TokenService } from 'src/app/shared/services/token.service';
import { CategoriesService } from '../../services/categories.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  user_id: number;
  products: Product[];
  pageOfItems: Array<any>;

  constructor(
    private tokenService: TokenService,
    private categoryService: CategoriesService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.user_id = +this.tokenService.getUser();
    this.categoryService.getLaptopProducts().subscribe((response: Product[]) => {
      this.products = response;
      console.log('laptop products', response);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  addToCart(product_id: number, quantity?: number) {
    this.categoryService.addCartItem(this.user_id, product_id, quantity ? quantity : 1).subscribe((response: Cart) => {
      console.log(response);
      this.categoryService.toRefreshNavigation(true);
    });
  }

  insertWishlist(product_id: number) {
    this.categoryService.insertWishlist(this.user_id, product_id).subscribe((response: boolean) => {
      console.log(response, 'wishlist inserted');
      this.categoryService.toRefreshNavigation(true);
    });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['item', id]);
  }
}
