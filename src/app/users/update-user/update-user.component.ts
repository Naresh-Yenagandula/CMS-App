import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm:FormGroup;
  group=['Admin','Registered'];
  constructor(private fb:FormBuilder) { }
  onSubmit():void{
    console.log(this.userForm.value);
    
  }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      full_name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      groupSelected:['',Validators.required]
    })
  }
}
