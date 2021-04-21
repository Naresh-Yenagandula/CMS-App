import { Injectable } from '@angular/core';
import { category } from './category';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  url     = `${environment.hostUrl}/getdata/categories`;
  findUrl = `${environment.hostUrl}/getdata/category/`;
  head    = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  addcategory(c: category): Observable<category> {
    return this.http.post<category>(this.url, c, this.head);
  }
  getCategories(offset) {
    return this.http.get(this.url + `/${offset}`, this.head);
  }
  getCategory(id): Observable<any> {
    return this.http.get<category>(this.findUrl + id, this.head);
  }
  upadateCategory(p, id): Observable<category> {
    return this.http.put<category>(this.url + '/' + id, p, this.head);
  }
  deleteCategory(id): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id, this.head);
  }
 
}
