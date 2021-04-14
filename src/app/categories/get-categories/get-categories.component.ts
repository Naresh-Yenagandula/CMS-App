import { Component, OnInit,ViewChild } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { category } from '../../category';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


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
  constructor(private cs:CategoriesService) { }
  getcategory(){
    return this.cs.getCategory().subscribe((data)=>{
      this.categories = data.map((info)=>({
        title:info.title
      }))
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnInit(): void {
    this.getcategory();
  }

}
