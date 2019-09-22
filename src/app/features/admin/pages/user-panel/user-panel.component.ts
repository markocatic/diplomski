import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../../services/user-admin.service';
import { User } from 'src/app/shared/models/user.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  listOfUsers: User[];
  oneUser: User;
  userForm: FormGroup;
  newUserForm: FormGroup;
  constructor(private usersService: UserAdminService) {
    this.userForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
        Validators.email
      ]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      role_id: new FormControl('', [Validators.required])
    });
    this.newUserForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
        Validators.email
      ]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      role_id: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((response: User[]) => {
      console.log(response);
      this.listOfUsers = response;
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe((response: number) => {
      console.log('deleted', response);
      this.usersService.getUsers().subscribe((response: User[]) => {
        console.log(response);
        this.listOfUsers = response;
      });
    });
  }

  getOneUser(id: number) {
    this.usersService.getOne(id).subscribe((response: User) => {
      this.oneUser = response;
      console.log('one user', response);
      this.userForm.patchValue({ name: response.name });
      this.userForm.patchValue({ email: response.email });
      // this.userForm.patchValue({ password: response.password });
      this.userForm.patchValue({ role_id: response.role_id });
    });
  }

  onSubmit(id: number) {
    console.log(this.userForm.get('email').value);
    console.log(this.userForm.value.name);
    console.log(this.userForm.value.password);
    console.log(this.userForm.value.role_id);

    if (this.userForm.value.role_id !== null && this.userForm.value.role_id !== undefined) {
      this.usersService
        .updateUser(
          id,
          this.userForm.value.name,
          this.userForm.get('email').value,
          this.userForm.value.password,
          this.userForm.value.role_id
        )
        .subscribe((response: number) => {
          console.log('USER updated 1', response);
          this.usersService.getUsers().subscribe((response: User[]) => {
            console.log(response);
            this.listOfUsers = response;
          });
        });
    } else {
      this.usersService
        .updateUser(id, this.userForm.value.name, this.userForm.get('email').value, this.userForm.value.password)
        .subscribe((response: number) => {
          console.log('USER updated 2', response);
          this.usersService.getUsers().subscribe((response: User[]) => {
            console.log(response);
            this.listOfUsers = response;
          });
        });
    }
  }

  get updatePass() {
    return this.userForm.get('password');
  }

  get addPass() {
    return this.newUserForm.get('password');
  }

  get updateEmail() {
    return this.userForm.get('email');
  }

  get addEmail() {
    return this.newUserForm.get('email');
  }

  get updateName() {
    return this.userForm.get('name');
  }

  get addName() {
    return this.newUserForm.get('name');
  }

  get updateRole() {
    return this.userForm.get('role_id');
  }

  get addRole() {
    return this.newUserForm.get('role_id');
  }

  onAdd() {
    console.log(this.newUserForm.get('email').value);
    console.log(this.newUserForm.value.name);
    console.log(this.newUserForm.value.password);
    console.log(this.newUserForm.value.role_id);

    this.usersService
      .save(
        this.newUserForm.value.name,
        this.newUserForm.get('email').value,
        this.newUserForm.value.password,
        this.newUserForm.value.role_id
      )
      .subscribe((response: number) => {
        console.log(response, 'ADDED NEW USER');
        this.usersService.getUsers().subscribe((response: User[]) => {
          console.log(response);
          this.listOfUsers = response;
        });
      });
  }
}
