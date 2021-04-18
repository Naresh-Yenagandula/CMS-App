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
});
