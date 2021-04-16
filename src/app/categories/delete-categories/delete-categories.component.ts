import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoriesService} from '../../categories.service';
@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css']
})
export class DeleteCategoriesComponent implements OnInit {
  message:boolean=false;
  constructor(private cservice:CategoriesService,private route:ActivatedRoute) { }
  deleteCategory():void{
    if(confirm("Are you sure to delete this record ?")==true){
    const id = this.route.snapshot.paramMap.get('id');
    this.cservice.deleteCategory(id).subscribe((data)=>{
      this.message=true;
    })
  }
  }
  ngOnInit(): void {
    this.deleteCategory();
  }

  }
