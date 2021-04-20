import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  addUser():void{
    this.router.navigate(['addUser'],{relativeTo:this.route})
  }
  updateUser():void{
    this.router.navigate(['updateUser'],{relativeTo:this.route});
  }
  ngOnInit(): void {
  }

}
