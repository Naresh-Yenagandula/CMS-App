import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {AuthLoginService} from '../auth-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide=true;
  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private authService:AuthLoginService) { }

  onSubmit():void{
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value).subscribe(result=>{
        console.log(this.loginForm);
        
      });
    }
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password:['',[Validators.required]]
    })
  }

}
