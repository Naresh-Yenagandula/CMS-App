import { Injectable } from '@angular/core';
import { category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  cat: category[] = [];

  constructor() {}
  addcategory(c: category) {
    this.cat.push(c);
  }
}
