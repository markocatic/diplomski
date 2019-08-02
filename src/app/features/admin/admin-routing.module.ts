import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { UserPanelComponent } from './pages/user-panel/user-panel.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full'},
      { path: "user", component: UserPanelComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
