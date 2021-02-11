import {IUser } from '../igithub';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  readonly rootUrl = "https://api.github.com";

  constructor(private http: HttpClient) { }

  fetchUsers(count: number): Promise<IUser[]> {
    return this.http.get<IUser[]>(this.rootUrl + "/users?per_page=" + count).toPromise();
  }

}
