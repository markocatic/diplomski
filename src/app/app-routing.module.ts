import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';
import { LoggedGuard } from './shared/guards/logged.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './features/admin/admin.module#AdminModule'
  },
  {
    path: '',
    loadChildren: './features/categories/categories.module#CategoriesModule'
  },
  {
    path: 'access',
    loadChildren: './features/access/access.module#AccessModule',
    canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
