import { Injectable } from '@angular/core';
import {page} from './page';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  pages:page[]=[];
  constructor() { }
  // getPages():void{

  // }
  addPages(p:page):void{
    this.pages.push(p);
  }
}
