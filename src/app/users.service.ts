import { Injectable } from '@angular/core';
import {user} from './users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
 // users:user[]=[];

 
 constructor(private http:HttpClient) { }

  url='http://localhost:3000/api/user/register';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
 
  addUsers(u:user): Observable<user>{
  return this.http.post<user>(this.url,u,this.head);
  }

  updateUsers(u:user): Observable<user>{
    return this.http.put<user>(this.url,u,this.head);
    }

  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.url,this.head);
  }

}
