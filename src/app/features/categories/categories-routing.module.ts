import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { TvComponent } from './pages/tv/tv.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { IphoneComponent } from './pages/iphone/iphone.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'smartphones', component: SmartphonesComponent },
      { path: 'tv', component: TvComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'iphone', component: IphoneComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
