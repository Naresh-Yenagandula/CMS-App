import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {PagesService} from "../../pages.service";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  updateForm:FormGroup;
  message:String="";


  category = ['category one','category two', 'category three'];
  author = ['John Wick','Vicky Nash','Jenni lora','Austen Paige'];
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private pageService:PagesService) { }

  updateDetail():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.pageService.updatePage(this.updateForm.value,id).subscribe((data)=>{
      this.message = "Updated Successfully";
    },(error)=>{
      this.message = error.message;
    })
  }
  getPageDetail():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.pageService.getPage(id).subscribe((data)=>{
      this.updateForm.setValue({
        title:data.title,
        categorySelected:data.category,
        authorSelected:data.author
      })
    })
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      categorySelected:['',[Validators.required]],
      authorSelected:['',[Validators.required]]
    })
    this.getPageDetail();
  }

}
