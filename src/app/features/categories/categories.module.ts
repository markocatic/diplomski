import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { TvComponent } from './pages/tv/tv.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { ItemComponent } from './pages/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthorComponent } from './pages/author/author.component';
import { LaptopComponent } from './pages/laptop/laptop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    SmartphonesComponent,
    TvComponent,
    ShoppingCartComponent,
    HomeComponent,
    IphoneComponent,
    ItemComponent,
    ContactComponent,
    AuthorComponent,
    LaptopComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [SharedModule, CategoriesRoutingModule, FormsModule, ReactiveFormsModule, SharedModule]
})
export class CategoriesModule {}
