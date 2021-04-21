import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  constructor(private http: HttpClient) { }
  url   = `${environment.hostUrl}/api/user/login`;
  head  = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  loginUser(data): Observable<any> {
    return this.http.post<any>(this.url, data, this.head);
  }
}

