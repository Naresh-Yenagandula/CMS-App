import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit {
  categories: any = [];
  c: number = 1;
  limit: number = 5;
  total: number;

  constructor(private cs: CategoriesService,private router:Router) { }

  getCategories(c: number): void {
    let offset = (c - 1) * this.limit;
    this.cs.getCategories(offset, this.limit).subscribe((info) => {
      this.categories = info;
    });
    this.total = this.categories.no;
  }
  getPage(p): void {
    this.getCategories(p);
    this.c = p;
  }
  update(id):void{
    this.router.navigate(['categories/updateCategory/'+id]);
  }
  delete(id):void{
    this.router.navigate(['categories/deleteCategory/'+id]);
  }
  ngOnInit(): void {
    this.getPage(this.c);
  }
}


