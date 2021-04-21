import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule,RouterModule.forRoot([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('should return true after login',async ()=>{
  //   var data = {"email":"admin@gmail.com","password":"Admin123##"};
  //   const result = await component.onSubmit(data);
  //   expect(result).toBeTruthy();
  // })

  // it('should return message length zero',()=>{
  //   var data = {"email":"admin@gmail.com","password":"Admin123##"};
  //   component.onSubmit(data);
  //   expect(component.message.length).toBeLessThan(1);
  // });
});
