import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {
  categoryForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  onSubmit():void{
    console.log(this.categoryForm.value);
    
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
  })
}

}
