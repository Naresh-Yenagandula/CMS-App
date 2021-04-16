import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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

  constructor(private cs: CategoriesService,private router:Router,private route:ActivatedRoute) { }

  getCategories(c): void {
    let offset = (c - 1) * this.limit;
      this.cs.getCategories(offset).subscribe((info)=>{
        this.categories=info;
    });
    this.total = this.categories.no;
  }
  navigate(p):void{
    this.router.navigate(['categories/get/'+p]);
    this.getCategories(p);
    this.c=p;
  }
  
  update(id):void{
    this.router.navigate(['categories/updateCategory/'+id]);
  }
  delete(id):void{
    this.router.navigate(['categories/deleteCategory/'+id]);
  }
  ngOnInit(): void {
    this.c=parseInt(this.route.snapshot.paramMap.get('no'));
    this.getCategories(this.c);
  }
}


