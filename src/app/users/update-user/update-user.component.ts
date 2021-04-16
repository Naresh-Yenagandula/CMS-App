import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm:FormGroup;
  group=['Admin','Registered'];
  message:boolean=false;

  constructor(private fb:FormBuilder,private route: ActivatedRoute, private userService:UsersService) { }
  updateUser():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.updateUsers(this.userForm.value,id).subscribe((data) => {
      this.message = true;
    }, (error) => {
      this.message = error.message;
    })
  }

  getUserDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((data) => {
      this.userForm.setValue({
        name: data.name,
        email: data.email,
        group: data.group
      })
    })
  }
    

  ngOnInit(): void {
    this.userForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      group:['',Validators.required]
    })
    this.getUserDetail();
  }
}
