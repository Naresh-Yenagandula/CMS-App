import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { category } from '../../category';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit {
  categories:category[]=[];
  constructor(private cs:CategoriesService) { }
  getcategory(){
    return this.cs.getCategory().subscribe((data)=>{
      this.categories = data.map((info)=>({
        title:info.title
      }))
    });
  }
  ngOnInit(): void {
    this.getcategory();
  }

}
