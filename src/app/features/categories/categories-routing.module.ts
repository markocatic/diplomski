import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { TvComponent } from './pages/tv/tv.component';

const routes: Routes = [
  {
    path: "",
    component: CategoriesComponent,
    children: [
      { path: '', redirectTo: 'smartphones', pathMatch: 'full'},
      { path: "smartphones", component: SmartphonesComponent },
      { path: 'tv', component: TvComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesRoutingModule { }
