import { IUser } from '../igithub';
import { OrganizationsService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { SSL_OP_NETSCAPE_CA_DN_BUG } from 'constants';

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
        for (let i = 0; i < obj.length; i++) {
          console.log();
        }
        this.users = obj;//JSON.stringify(res);
      })
      .catch(err => {
        console.error(err);
        alert("ERROR!: " + JSON.stringify( err.status ));
      });

  }

}
