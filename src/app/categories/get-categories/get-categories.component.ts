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
  p: number = 1;
  limit: number = 3;
  total: number;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['title','update','delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cs:CategoriesService,private router:Router,private route:ActivatedRoute) { }
  getCategories(p:number):void{
    let offset=(p-1)*this.limit;
    this.cs.getCategories(offset,this.limit).subscribe((info)=>
    this.categories=info.map((info)=>({
      title:info.title
    }))
    this.categories=info.total;
    this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
  });
}
  
  /* getcategory(){
    return this.cs.getCategories().subscribe((data)=>{
      this.categories = data.map((info)=>({
        title:info.title
      }))
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }  */
  
  getPage(pageNo: number) {
    this.p = pageNo;
    this.getCategories(this.p);
  }


  updateCategory():void{
    this.router.navigate(['updateCategory/'],{relativeTo:this.route});
  }
  ngOnInit(): void {
    this.getcategory();
  }

}
