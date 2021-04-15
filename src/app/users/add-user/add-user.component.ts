import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {user} from '../../users';
import {UsersService} from '../../users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm:FormGroup;
  group=['Admin','Registered'];
  message=false;

  users:user={full_name:'',email:'',password:'',group:''};

  constructor(private fb:FormBuilder, private userService:UsersService) { }

  onSubmit():void{
    this.userService.addUsers(this.users).subscribe(data => {
      this.message = true;
    },error=>{
      this.message = error.error.message;
    });
  }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      full_name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password:['',[Validators.required]],
      groupSelected:['',Validators.required]
    })
  }

}
