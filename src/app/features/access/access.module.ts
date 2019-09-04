import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccessRoutingModule } from './access-routing.module';

@NgModule({
  declarations: [AccessComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
