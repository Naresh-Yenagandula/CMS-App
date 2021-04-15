import { Injectable } from '@angular/core';
import { page } from './page';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/getdata/pages';
  findUrl = 'http://localhost:3000/getdata/page/';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  addPages(p: page): Observable<page> {
    return this.http.post<page>(this.url, p, this.head);
  }
  getPages(offset: number, limit: number) {
    return this.http.get(this.url + `/${offset}/${limit}`, this.head);
  }
  getPage(id): Observable<any> {
    return this.http.get<any>(this.findUrl + id, this.head);
  }
  updatePage(p, id): Observable<page> {
    return this.http.put<page>(this.url + "/" + id, p, this.head);
  }
}
