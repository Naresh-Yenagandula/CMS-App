import { Injectable } from '@angular/core';
import { page } from './page';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private http: HttpClient) { }
  url = 'https://cms-node-app.herokuapp.com/getdata/pages';
  findUrl = 'https://cms-node-app.herokuapp.com/getdata/page/';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  addPages(p: page): Observable<page> {
    return this.http.post<page>(this.url, p, this.head);
  }
  getPages(offset) {
    return this.http.get(this.url+`/${offset}`,this.head);
  }
  getPage(id): Observable<any> {
    return this.http.get<any>(this.findUrl + id, this.head);
  }
  updatePage(p, id): Observable<page> {
    return this.http.put<page>(this.url + "/" + id, p, this.head);
  }
  deletePage(id):Observable<any>{
    return this.http.delete<any>(this.url+`/${id}`,this.head);
  }
  getLatestPages():Observable<any>{
    return this.http.get<any>(this.url,this.head);
  }
}
