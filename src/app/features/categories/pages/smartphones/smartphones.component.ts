import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { CategoriesService } from '../../services/categories.service';
import { Product } from 'src/app/shared/models/product.model';
import { Cart } from 'src/app/shared/models/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss']
})
export class SmartphonesComponent implements OnInit {
  user_id: number;
  pageOfItems: Array<any>;
  products: Product[];
  showSize: number = 9;
  priceValue: number;

  constructor(
    private tokenService: TokenService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

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

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  addToCart(product_id: number, quantity?) {
    this.categoriesService
      .addCartItem(this.user_id, product_id, quantity ? quantity : 1)
      .subscribe((response: Cart) => {
        console.log(response);
        this.categoriesService.toRefreshNavigation(true);
      });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['item', id]);
  }

  onChange(event) {
    console.log(event);
    this.showSize = +event;
  }

  changeRadio(event) {
    if (event === 'all') {
      this.categoriesService.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    } else if (event === 'samsung') {
      this.categoriesService.getSamsungProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    } else {
      this.categoriesService.getIphoneProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    }
  }

  changePrice() {
    console.log(this.priceValue);
    // this.products = this.products.filter(item => item.price > this.priceValue);
  }
}
