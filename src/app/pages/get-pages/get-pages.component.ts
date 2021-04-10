import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-get-pages',
  templateUrl: './get-pages.component.html',
  styleUrls: ['./get-pages.component.css']
})
export class GetPagesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  updatePage():void{
    this.router.navigate(['updatePage'],{relativeTo:this.route});
  }
}
