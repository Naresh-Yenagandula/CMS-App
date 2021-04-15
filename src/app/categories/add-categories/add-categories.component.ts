import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories.service';
import { category } from '../../category';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  cats?: category = { title: '' };
  message=false;
  constructor(private fb: FormBuilder, private cs: CategoriesService) {}

  onSubmit(): void {
    //console.log(this.categoryForm.value);
    this.cs.addcategory(this.cats).subscribe((data)=>{
      this.message=true;
    });
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
    });
  }
}
