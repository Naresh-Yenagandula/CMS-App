import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  addForm:FormGroup;

  constructor(private fb:FormBuilder) { }
  onSubmit():void{
    console.log(this.addForm.value);
    
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title:['',[Validators.required]],
      categorySelected:['',[Validators.required]],
      authorSelected:['',[Validators.required]]
    })
  }

}
