import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JarService } from 'src/app/shared/services/jar.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../../categories/services/categories.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regForm: FormGroup;

  constructor(
    private jar: JarService,
    private token: TokenService,
    private auth: AuthService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.regForm.value.email);
    console.log(this.regForm.value.password);

    this.jar.login({ email: this.regForm.value.email, password: this.regForm.value.password }).subscribe(
      data => {
        this.handleResponse(data);
        this.handleUser(data['user']);
        this.handleRole(data['role']);
        this.categoriesService.toRefreshNavigation(true);
        console.log('refresh navvv');
        console.log(data['user'], 'user');
        console.log(data['role'], 'ROLE');
      },
      error => console.log(error)
    );
  }
  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('smartphones');
  }

  handleUser(user) {
    this.token.handleUser(user);
  }

  handleRole(role) {
    this.token.handleRole(role);
    if (role === 1) {
      console.log('redIREKCIJA');
      this.router.navigateByUrl('/admin/user');
    }
  }
}
