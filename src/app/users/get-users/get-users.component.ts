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

  getUsers():user[]{
    return this.userService.users;
  }
  
  ngOnInit(): void {
  }

  updateUser():void{
    this.router.navigate(['updateUser'],{relativeTo:this.route});
  }

}
