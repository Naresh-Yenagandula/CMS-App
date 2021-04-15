import { Component, OnInit,ViewChild } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { category } from '../../category';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit {
  categories=[];
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['title','update','delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cs:CategoriesService,private router:Router,private route:ActivatedRoute) { }
  getcategory(){
    return this.cs.getCategories().subscribe((data)=>{
      this.categories = data.map((info)=>({
        title:info.title
      }))
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }
  updateCategory():void{
    this.router.navigate(['updateCategory/'],{relativeTo:this.route});
  }
  ngOnInit(): void {
    this.getcategory();
  }

}
