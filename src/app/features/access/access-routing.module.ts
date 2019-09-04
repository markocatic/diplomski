import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: "",
    component: AccessComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: "login", component: LoginComponent },
      { path: 'register', component: RegisterComponent}
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



export class AccessRoutingModule { }
