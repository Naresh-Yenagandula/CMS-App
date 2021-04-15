import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';
import { ActivatedRoute,Router } from "@angular/router";

// import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // searchForm:FormGroup;
  name:String="";
  constructor(private userService:UsersService,private router:Router) { }
  getName():void{
    this.userService.getName().subscribe(data=> {
        this.name = data.name.name;
        },
      error=>{this.router.navigate(['login'])
    }
    )
  }

  ngOnInit(): void {
    this.getName();
    // this.searchForm = this.fb.group({
    //   search:['',[Validators.required]]
    // })
  }

}
