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
     this.pageService.getPages(offset).subscribe((info)=>{
        this.pages=info;
    });
    this.total = this.pages.no;
  }

 navigate(p):void{
   this.router.navigate(['pages/get/'+p]);
   this.getPages(p);
   this.pageNo=p;
 }
 update(id):void{
   this.router.navigate(['pages/updatePage/'+id]);
 }
 delete(id):void{
   this.router.navigate(['pages/deletePage/'+id]);
 }
  ngOnInit(): void {
    this.pageNo = parseInt(this.route.snapshot.paramMap.get('no'));
    this.getPages(this.pageNo);
  }
}
