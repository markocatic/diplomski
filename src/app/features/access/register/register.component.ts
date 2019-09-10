import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JarService } from 'src/app/shared/services/jar.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    password_confirmation: new FormControl('')
  });

  constructor(
    private jar: JarService,
    private router: Router,
    private token: TokenService,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.regForm.value.email);
    console.log(this.regForm.value.password);
    console.log(this.regForm.value.password_confirmation);
    console.log(this.regForm.value.name);

    this.jar
      .singup({
        email: this.regForm.value.email,
        password: this.regForm.value.password,
        name: this.regForm.value.name,
        password_confirmation: this.regForm.value.password_confirmation
      })
      .subscribe(data => this.handleResponse(data), error => console.log(error));
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('categories/smartphones');
    this.auth.changeAuthStatus(true);
  }
}
