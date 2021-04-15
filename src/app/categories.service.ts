import { Injectable } from '@angular/core';
import { category } from './category';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  url = 'http://localhost:3000/getdata/categories';
  findUrl = 'http://localhost:3000/getdata/category/';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) { }

  addcategory(c: category): Observable<category> {
    return this.http.post<category>(this.url, c, this.head);
  }
  getCategories(offset: number, limit: number) {
    return this.http.get(this.url + `/${offset}/${limit}`, this.head);
  }
  getCategory(id): Observable<any> {
    return this.http.put<category>(this.findUrl + id, this.head);
  }
  upadateCategory(c, id): Observable<category> {
    return this.http.put<category>(this.url + "/" + id, c, this.head);
  }
}
