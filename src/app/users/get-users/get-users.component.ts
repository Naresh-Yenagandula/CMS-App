import { Component, OnInit,ViewChild } from '@angular/core';
import {UsersService} from '../../users.service';
import {user}  from '../../users';
import {ActivatedRoute,Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users :any=[];
  p :number =1;
  limit :number =5;
  total:number;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['full_name', 'email', 'group','update','delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route:ActivatedRoute,private router:Router,private userService:UsersService) { }

  getUsers(p):void{
    let offset=(p-1)*this.limit;

    this.userService.getUsers(offset,this.limit).subscribe((info)=>{
      this.users = info;
    });
    this.total = this.users.no;
  }

  getPage(pNo:number){
    this.p=pNo;
    this.getUsers(this.p);
  }

  ngOnInit(): void {
    this.getUsers(this.p);
  }

  updateUser():void{
    this.router.navigate(['updateUser'],{relativeTo:this.route});
  }

}
