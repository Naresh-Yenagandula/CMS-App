import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users :any=[];
  pNo :number =1;
  limit :number =5;
  total:number;

  constructor(private userService:UsersService,private router:Router) { }

  getUsers(p):void{
    let offset=(p-1)*this.limit;
    this.userService.getUsers(offset,this.limit).subscribe((info)=>{
      this.users = info;
    });
    this.total = this.users.no;
  }

  getPage(p:number){
    this.pNo=p;
    this.getUsers(this.pNo);
  }
  update(id):void{
    this.router.navigate(['users/updateUser/'+id]);
  }
  delete(id):void{
    this.router.navigate(['users/deleteUser/'+id]);
  }

  ngOnInit(): void {
    this.getPage(this.pNo);
  }

}
