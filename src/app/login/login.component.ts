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
   /*  console.log(this.loginForm.value);
    this.router.navigate(['']) */
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);  
        }else{
          alert(result.message);
        }
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
