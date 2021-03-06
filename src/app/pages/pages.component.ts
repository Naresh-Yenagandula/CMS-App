import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  //navigate to add page
  addPage():void{
    this.router.navigate(['addPage'],{relativeTo:this.route})
  }
  ngOnInit(): void {
  }

}
