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
  
  getLatestPages():void{
    this.pageService.getLatestPages().subscribe((data)=>{
      this.pages = data;
    })
  }

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
