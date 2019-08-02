import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { UserPanelComponent } from './pages/user-panel/user-panel.component';

@NgModule({
  declarations: [AdminComponent, UserPanelComponent],
  imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
