import { Injectable } from '@angular/core';
import {user} from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  users:user[]=[];

  addUser(u:user): void{
    this.users.push(u);
  }
  
  constructor() { }
}
