import { Injectable } from '@angular/core';
import { user } from './users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url = 'https://cms-node-app.herokuapp.com/api/user/register';
  urlInfo = "https://cms-node-app.herokuapp.com/verify/data";
  getDataUrl = "https://cms-node-app.herokuapp.com/getData/users";
  findUrl = 'https://cms-node-app.herokuapp.com/getdata/user/';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  addUsers(u: user): Observable<user> {
    return this.http.post<user>(this.url, u, this.head);
  }

  updateUsers(u,id): Observable<user> {
    return this.http.put<user>(this.getDataUrl+ "/" + id, u, this.head);
  }

  getUsers(offset) {
    return this.http.get(`${this.getDataUrl}/${offset}`, this.head);
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(this.findUrl + id, this.head);
  }

  getName(): Observable<any> {
    return this.http.get<any>(this.urlInfo, { params: new HttpParams().append('token', localStorage.getItem('token')) });
  }

  deleteUser(id):Observable<any>{
    return this.http.delete<any>(this.getDataUrl+`/${id}`,this.head);
  }

  getLatestUsers():Observable<any>{
    return this.http.get<any>(this.getDataUrl,this.head);
  }

}
