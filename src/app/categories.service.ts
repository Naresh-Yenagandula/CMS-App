import { Injectable } from '@angular/core';
import { category } from './category';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  url = 'http://localhost:3000/getdata/categories';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private http:HttpClient) {}
  addcategory(c: category):Observable<category> {
    return this.http.post<category>(this.url,c,this.head);
  }
  getCategory():Observable<category[]>{
    return this.http.get<category[]>(this.url,this.head);
  }
}
