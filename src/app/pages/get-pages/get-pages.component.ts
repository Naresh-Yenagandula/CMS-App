import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PagesService} from "../../pages.service";
import {page} from '../../page';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-get-pages',
  templateUrl: './get-pages.component.html',
  styleUrls: ['./get-pages.component.css']
})
export class GetPagesComponent implements OnInit {
  pages:any=[];
  pageNo:number =1;
  limit:number=5;
  total:number; 
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['title','category','author','update','delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route:ActivatedRoute,private router:Router,private pageService:PagesService) { }

  getPages(pageNo):void{
    console.log("fired"+pageNo);
    
    let offset = (pageNo-1)*this.limit;
     this.pageService.getPages(offset,this.limit).subscribe((info)=>{
       console.log(info);
       
        this.pages=info;
    });
    this.total = this.pages.no;
  }
  ngOnInit(): void {
    this.getPages(this.pageNo);
  }
}
