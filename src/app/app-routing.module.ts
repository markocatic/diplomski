import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: "./features/admin/admin.module#AdminModule"
  },
  {
    path: "categories",
    loadChildren: "./features/categories/categories.module#CategoriesModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
