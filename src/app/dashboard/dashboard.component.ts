import { Component, OnInit } from '@angular/core';
import {PagesService} from '../pages.service';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pages = [];
  users = [];

  constructor(private pageService:PagesService,private userService:UsersService) { }
  
  //get latest pages
  getLatestPages():void{
    this.pageService.getLatestPages().subscribe((data)=>{
      this.pages = data;
    })
  }

  //get latest users
  getLatestUsers():void{
    this.userService.getLatestUsers().subscribe((data)=>{
      this.users = data;
    })
  }

  ngOnInit(): void {
    this.getLatestPages();
    this.getLatestUsers();
  }

}
