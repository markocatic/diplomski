import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { CategoriesService } from '../../services/categories.service';
import { Product } from 'src/app/shared/models/product.model';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss']
})
export class SmartphonesComponent implements OnInit {
  array: number[] = new Array<number>(9).fill(1);
  user_id: number;

  products: Product[];

  constructor(private tokenService: TokenService, private categoriesService: CategoriesService) {}

  ngOnInit() {
    console.log(this.tokenService.getUser());
    this.user_id = +this.tokenService.getUser();

    // this.categoriesService.getIphoneProducts().subscribe((response: Product[]) => {
    //   console.log(response);
    //   this.products = response;
    // });

    this.categoriesService.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
      console.log(this.products, 'GET ALL PRODUCTS');
    });
  }

  addToCart(product_id: number, quantity?) {
    this.categoriesService
      .addCartItem(this.user_id, product_id, quantity ? quantity : 1)
      .subscribe((response: Cart) => {
        console.log(response);
        this.categoriesService.toRefreshNavigation(true);
      });
  }
}
