import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  addForm:FormGroup;

  category = ['category one','category two', 'category three'];
  author = ['John Wick','Vicky Nash','Jenni lora','Austen Paige'];

  constructor(private fb:FormBuilder) { }
  
  onSubmit():void{
    console.log(this.addForm.value);
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      categorySelected:['',[Validators.required]],
      authorSelected:['',[Validators.required]]
    })
  }

}
