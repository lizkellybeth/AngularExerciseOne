import { IUser } from '../igithub';
import { OrganizationsService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service: OrganizationsService) { }

  users: IUser[] = [];

  ngOnInit(): void {
    this.fetchUsers(10);
  }

  fetchUsers(count: number) {
    this.service.fetchUsers(count)
      .then(res => {
        console.log("fetched result: " + JSON.stringify(res));
        let obj: IUser[] = res;
        this.users = obj;
      })
      .catch(err => {
        console.error(err);
        alert("ERROR!: " + JSON.stringify(err.status));
      });

  }

}
