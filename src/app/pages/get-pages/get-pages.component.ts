import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PagesService} from "../../pages.service";
import {page} from '../../page';

@Component({
  selector: 'app-get-pages',
  templateUrl: './get-pages.component.html',
  styleUrls: ['./get-pages.component.css']
})
export class GetPagesComponent implements OnInit {
  pages:page[]=[];
  constructor(private route:ActivatedRoute,private router:Router,private pageService:PagesService) { }

  getPages():void{
     this.pageService.getPages().subscribe((info)=>{
      this.pages = info.map((data)=>({
        title:data.title,
        category:data.category,
        author:data.author
      }))
    });
  }
  ngOnInit(): void {
    this.getPages();
  }
  updatePage():void{
    this.router.navigate(['updatePage'],{relativeTo:this.route});
  }
}
