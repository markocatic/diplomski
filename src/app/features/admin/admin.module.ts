import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPanelComponent } from './pages/product-panel/product-panel.component';
import { ContactPanelComponent } from './pages/contact-panel/contact-panel.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { CategoriesModule } from '../categories/categories.module';
import { TransactionsComponent } from './pages/transactions/transactions.component';

@NgModule({
  declarations: [AdminComponent, UserPanelComponent, ProductPanelComponent, ContactPanelComponent, TransactionsComponent],
  imports: [SharedModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, SharedModule]
})
export class AdminModule {}
