import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: String = "";
  group: String = "";
  constructor(private userService: UsersService, private router: Router) { }

  //verify token 
  getName(): void {
    this.userService.getName().subscribe((data) => {
      this.name = data.name.name;
    },
      (error) => {
        this.router.navigate(['login'], { skipLocationChange: true })
      }
    )
  }

  logout(): boolean {
    try {
      localStorage.removeItem('token');
      this.router.navigate(['login'])
      return true;
    } catch (error) {
         return false;
    }
  }

  ngOnInit(): void {
    this.getName();
  }
}
