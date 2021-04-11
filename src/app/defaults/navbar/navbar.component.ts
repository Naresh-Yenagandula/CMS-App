import { Component, OnInit } from '@angular/core';
// import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // searchForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    // this.searchForm = this.fb.group({
    //   search:['',[Validators.required]]
    // })
  }

}
