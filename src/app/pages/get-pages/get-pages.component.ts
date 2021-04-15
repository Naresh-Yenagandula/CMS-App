import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PagesService} from "../../pages.service";

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

  constructor(private route:ActivatedRoute,private router:Router,private pageService:PagesService) { }

  getPages(pageNo):void{
    let offset = (pageNo-1)*this.limit;
     this.pageService.getPages(offset,this.limit).subscribe((info)=>{
        this.pages=info;
    });
    this.total = this.pages.no;
  }

  getPage(p):void{
    this.getPages(p);
    this.pageNo  = p;
  }
  ngOnInit(): void {
    this.getPage(this.pageNo);
  }
}
