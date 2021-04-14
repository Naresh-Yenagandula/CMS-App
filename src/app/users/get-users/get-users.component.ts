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
  displayedColumns: string[] = ['full_name', 'email', 'group'];

  getUsers():void{
    this.userService.getUsers().subscribe((info)=>{
      this.users=info;
      // this.users = info.map((info)=>({
      //   full_name:info.name,
      //   email:info.email,
      //   password:info.password,
      //   group:info.group
      // }))
    });
  }
  dataSource = new MatTableDataSource<any>(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.getUsers();
    this.dataSource.paginator = this.paginator;
  }

  updateUser():void{
    this.router.navigate(['updateUser'],{relativeTo:this.route});
  }

}
