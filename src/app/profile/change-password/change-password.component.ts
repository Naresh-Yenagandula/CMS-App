import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from './password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword:FormGroup;
  constructor(private fb:FormBuilder) { }
  onSubmit(){
    // console.log(this.changePassword.value);
    return this.changePassword.value;
  }

  ngOnInit(): void {
    this.changePassword = this.fb.group({
      old:['',[Validators.required]],
      new:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      confirm:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    },{validator:MustMatch('new','confirm')})
  }

}
