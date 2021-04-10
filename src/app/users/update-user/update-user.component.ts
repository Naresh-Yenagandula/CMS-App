import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  full_name = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required,Validators.email]);
  groupSelected = new FormControl('',[Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

}
