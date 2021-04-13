import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {AuthLoginService} from '../auth-login.service';
import {login} from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide=true;
  message = "";
  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private authService:AuthLoginService) { }
 /*  loginUser(data):void{
    this.authService.loginUser(data).subscribe((info)=>{
     this.loginForm = info.map((data)=>({
       email:data.eamil,
       password:data.password,
     }))
   }); */
 
  onSubmit():void{
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value).subscribe(result=>{
        this.message = "login successfull";
        console.log(this.loginForm);
        console.log(result);
      },error=>{
        this.message = error.error;
        console.log(error);
        
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
