import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {
  categoryForm:FormGroup;
  message:String="";
  title = ['category one','category two', 'category three'];
  constructor(private fb:FormBuilder, private route:ActivatedRoute,private categoryService:CategoriesService) { }
  updateDetail():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService.upadateCategory(this.categoryForm.value,id).subscribe((data)=>{
      this.message = "Updated Successfully";
    },(error)=>{
      this.message = error.message;
    })
  }
  getCategoryDetail():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService. getCategory(id).subscribe((data)=>{
      this.categoryForm.setValue({
        title:data.title,
      })
    })
  }

  /* onSubmit():void{
    console.log(this.categoryForm.value);
    
  } */

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
  })
  this.getCategoryDetail();
}

}
