import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccessRoutingModule } from './access-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AccessComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AccessRoutingModule, ReactiveFormsModule, MaterialModule, SharedModule]
})
export class AccessModule {}
