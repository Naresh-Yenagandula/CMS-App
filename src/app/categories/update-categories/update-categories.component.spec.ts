import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UpdateCategoriesComponent } from './update-categories.component';

describe('UpdateCategoriesComponent', () => {
  let component: UpdateCategoriesComponent;
  let fixture: ComponentFixture<UpdateCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCategoriesComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,RouterModule.forRoot([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the message is false', ()=>{
    expect(component.message).toBeFalsy();
    // expect(component.message).toBeTruthy();
  })
  // it('Should execute update detail once',()=>{
  //   spyOn(component,'updateDetail');
  //   component.updateDetail();
  //   expect(component.updateDetail.calls.count()).toBe(1);
  // })
});

// describe('Update category',()=>{
//   it("should update",()=>{
//     expect(updateDetail()).toBeTruthy();
//   })
// });
