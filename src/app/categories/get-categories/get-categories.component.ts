import { Component, OnInit,ViewChild } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { category } from '../../category';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit {
  categories:any=[];
  c: number = 1;
  limit: number = 5;
  total: number;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['title','update','delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cs:CategoriesService,private router:Router,private route:ActivatedRoute) { }
 
  getCategories(c:number):void{
    console.log("fired"+c);
    let offset=(c-1)*this.limit;
    this.cs.getCategories(offset,this.limit).subscribe((info)=>{
    console.log(info);
    this.categories=info;
    });
    this.total = this.categories.no;
  }
  getPage(p):void{
    this.getCategories(p);
    this.c = p;
  }

  ngOnInit(): void {
    this.getCategories(this.c);
  }
}
  
  
