import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../../services/user-admin.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  listOfUsers: User[];
  oneUser: User;
  constructor(private usersService: UserAdminService) {}

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
    });
  }
}
