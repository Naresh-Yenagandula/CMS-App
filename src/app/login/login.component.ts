import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  message = "";
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthLoginService) { }

  onSubmit(): void {
      this.authService.loginUser(this.loginForm.value).subscribe(result => {
        localStorage.setItem('token', result);
        this.router.navigate(['dashboard']);
      }, error => {
        this.message = error.error.message;
      });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password: ['', [Validators.required]]
    })
  }

}
