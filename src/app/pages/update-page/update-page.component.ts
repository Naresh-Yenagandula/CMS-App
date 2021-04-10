import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  updateForm:FormGroup;

  category = ['category one','category two', 'category three'];
  author = ['John Wick','Vicky Nash','Jenni lora','Austen Paige'];
  constructor(private fb:FormBuilder) { }

  onSubmit():void{
    console.log(this.updateForm.value);
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      categorySelected:['',[Validators.required]],
      authorSelected:['',[Validators.required]]
    })
  }

}
