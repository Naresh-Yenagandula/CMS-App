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

  constructor(private route:ActivatedRoute,private router:Router,private pageService:PagesService) { }

  getPages():page[]{
    return this.pageService.pages;
  }
  ngOnInit(): void {
  }
  updatePage():void{
    this.router.navigate(['updatePage'],{relativeTo:this.route});
  }
}
