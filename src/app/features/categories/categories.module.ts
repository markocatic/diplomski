import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { TvComponent } from './pages/tv/tv.component';
import { PhoneCategoryComponent } from './pages/smartphones/components/phone-category/phone-category.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { ItemComponent } from './pages/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriesComponent,
    SmartphonesComponent,
    TvComponent,
    PhoneCategoryComponent,
    ShoppingCartComponent,
    HomeComponent,
    IphoneComponent,
    ItemComponent
  ],
  imports: [SharedModule, CategoriesRoutingModule, FormsModule, ReactiveFormsModule]
})
export class CategoriesModule {}
