import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm:FormGroup;
  groups=['Admin','Registered'];
  message=false;

  constructor(private fb:FormBuilder, private userService:UsersService) { }

  addUser():void{
    this.userService.addUsers(this.userForm.value).subscribe(data => {
      this.message = true;
    },error=>{
      this.message = false;
    });
  }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password:['',[Validators.required]],
      group:['',Validators.required]
    })
  }

}
