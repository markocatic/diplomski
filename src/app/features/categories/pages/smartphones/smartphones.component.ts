import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { CategoriesService } from '../../services/categories.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss']
})
export class SmartphonesComponent implements OnInit {
  array: number[] = new Array<number>(9).fill(1);
  user: string;

  products: Product[];

  constructor(private tokenService: TokenService, private categoriesService: CategoriesService) {}

  ngOnInit() {
    console.log(this.tokenService.getUser());
    this.user = this.tokenService.getUser();

    this.categoriesService.getIphoneProducts().subscribe((response: Product[]) => {
      console.log(response);
      this.products = response;
    });
  }
}
