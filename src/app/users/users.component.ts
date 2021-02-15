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
  userTable: string = "";

  ngOnInit(): void {
    this.fetchUsersAcsii(100);
  }

  fetchUsersAcsii(count: number) {
    this.service.fetchUsers(count)
      .then(res => {
        console.log("fetched result: " + JSON.stringify(res));
        let objs: IUser[] = res;
        objs.forEach(user => this.userTable = this.userTable.concat( 
          user.id.toString().padEnd(5, " ") + 
          user.login.padEnd(20, " ") + 
          user.type.padEnd(14, " ") + 
          new Boolean(user.site_admin).toString().padEnd(5, " ")
           + `\r\n`));

       })
      .catch(err => {
        console.error(err);
        alert("ERROR!: " + JSON.stringify( err.status ));
      });

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
