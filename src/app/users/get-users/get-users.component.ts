import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';
import {user}  from '../../users';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private userService:UsersService) { }
  users:user[]=[];

  getUsers():void{
    this.userService.getUsers().subscribe((info)=>{
      this.users = info.map((data)=>({
        full_name:data.full_name,
        email:data.email,
        password:data.password,
        group:data.group
      }))
    });
  }
  
  ngOnInit(): void {
    // this.getUsers();
  }

  updateUser():void{
    this.router.navigate(['updateUser'],{relativeTo:this.route});
  }

}
