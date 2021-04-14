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

  constructor(private route:ActivatedRoute,private router:Router,private userService:UsersService) { }
  users=[];
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['full_name', 'email', 'group'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getUsers():void{
    this.userService.getUsers().subscribe((info)=>{
      this.users = info.map((info)=>({
        name:info.name,
        email:info.email,
        password:info.password,
        group:info.group
      }))
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  updateUser():void{
    this.router.navigate(['updateUser'],{relativeTo:this.route});
  }

}
