import { Injectable } from '@angular/core';
import {page} from './page';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  // pages:page[]=[];
  constructor(private http:HttpClient) { }
  url = 'http://localhost:3000/pages';
  head = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  addPages(p:page):Observable<page>{
    return this.http.post<page>(this.url,p,this.head);
  }
  getPages():Observable<page[]>{
    return this.http.get<page[]>(this.url,this.head);
  }
}
