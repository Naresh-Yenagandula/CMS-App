import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  group = ['Admin','Registered']
  userForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  onSubmit(){
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
