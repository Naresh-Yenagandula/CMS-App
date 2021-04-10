import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

groupSelected = new FormControl('',[Validators.required]);
  full_name = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required,Validators.email]);
  
  constructor() { }

  ngOnInit(): void {
  }

}
