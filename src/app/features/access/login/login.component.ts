import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JarService } from 'src/app/shared/services/jar.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  regForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private jar: JarService,
    private token: TokenService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.regForm.value.email);
    console.log(this.regForm.value.password);

    this.jar.login({email: this.regForm.value.email, password: this.regForm.value.password}).subscribe(
      data => this.handleResponse(data),
      error => console.log(error)

    )
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('categories/smartphones');
  }






}
