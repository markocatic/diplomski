import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { TvComponent } from './pages/tv/tv.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { ItemComponent } from './pages/item/item.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LaptopComponent } from './pages/laptop/laptop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'smartphones', component: SmartphonesComponent },
      { path: 'tv', component: TvComponent },
      { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
      { path: 'iphone', component: IphoneComponent },
      { path: 'item/:id', component: ItemComponent },
      { path: 'author', component: AuthorComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] }
      // { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
