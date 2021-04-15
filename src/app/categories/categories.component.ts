import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  addCategory():void{
    this.router.navigate(['addCategory'],{relativeTo:this.route})
  }
  ngOnInit(): void {
  }

}
