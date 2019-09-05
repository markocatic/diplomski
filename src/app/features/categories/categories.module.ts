import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { TvComponent } from './pages/tv/tv.component';
import { PhoneCategoryComponent } from './pages/smartphones/components/phone-category/phone-category.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [CategoriesComponent, SmartphonesComponent, TvComponent, PhoneCategoryComponent, ShoppingCartComponent],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
