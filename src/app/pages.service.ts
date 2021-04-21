import { Injectable } from '@angular/core';
import { page } from './page';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private http: HttpClient) { }

  url = `${environment.hostUrl}/getdata/pages`;
  findUrl = `${environment.hostUrl}/getdata/page/`;
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  //add page request
  addPages(p: page): Observable<page> {
    return this.http.post<page>(this.url, p, this.head);
  }

  //get pages according to the offset
  getPages(offset) {
    return this.http.get(this.url + `/${offset}`, this.head);
  }

  //get page details by Id
  getPage(id): Observable<any> {
    return this.http.get<any>(this.findUrl + id, this.head);
  }

  //update page request
  updatePage(p, id): Observable<page> {
    return this.http.put<page>(this.url + "/" + id, p, this.head);
  }

  //delete page request
  deletePage(id): Observable<any> {
    return this.http.delete<any>(this.url + `/${id}`, this.head);
  }

  //get latest pages
  getLatestPages(): Observable<any> {
    return this.http.get<any>(this.url, this.head);
  }
}
