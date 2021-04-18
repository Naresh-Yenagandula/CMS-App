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
  constructor(private userService: UsersService, private router: Router) { }
  getName(): void {
    this.userService.getName().subscribe((data) => {
      this.name = data.name.name;
    },
      (error) => {
        this.router.navigate(['login'],{skipLocationChange:true})
      }
    )
  }

  ngOnInit(): void {
    this.getName();
  }
}
