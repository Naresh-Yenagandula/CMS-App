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
  pages=[];
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['title','category','author','update','delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route:ActivatedRoute,private router:Router,private pageService:PagesService) { }

  getPages():void{
     this.pageService.getPages().subscribe((info)=>{
      this.pages = info.map((data)=>({
        id:data._id,
        title:data.title,
        category:data.category,
        author:data.author
      }))
      this.dataSource = new MatTableDataSource(this.pages);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnInit(): void {
    this.getPages();
  }
  // updatePage():void{
  //   this.router.navigate(['updatePage'],{relativeTo:this.route});
  // }
}
