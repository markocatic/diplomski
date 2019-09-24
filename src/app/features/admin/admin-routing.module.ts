import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { ProductPanelComponent } from './pages/product-panel/product-panel.component';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full', canActivate: [AdminGuard] },
      { path: 'user', component: UserPanelComponent, canActivate: [AdminGuard] },
      { path: 'product', component: ProductPanelComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
