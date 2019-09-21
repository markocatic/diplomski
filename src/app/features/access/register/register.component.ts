import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { JarService } from 'src/app/shared/services/jar.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';

const passwordErrorValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password');
  const repeat = control.get('password_confirmation');

  return pass.value !== repeat.value ? { passwordError: true } : null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(private jar: JarService, private router: Router, private token: TokenService, private auth: AuthService) {
    this.regForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
          Validators.email
        ]),
        password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
        name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
        password_confirmation: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ])
      },
      { validators: passwordErrorValidator }
    );
  }

  get email() {
    return this.regForm.get('email');
  }
  get password() {
    return this.regForm.get('password');
  }
  get name() {
    return this.regForm.get('name');
  }
  get password_confirmation() {
    return this.regForm.get('password_confirmation');
  }

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
      .subscribe(
        data => {
          console.log(data);
          this.handleResponse(data);
        },
        error => console.log(error)
      );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/smartphones');
    this.auth.changeAuthStatus(true);
  }

  checkPasswords(group: FormGroup) {
    let pass = this.password;
    let confirm = this.password_confirmation;

    return pass === confirm ? null : { notSame: true };
  }
}
