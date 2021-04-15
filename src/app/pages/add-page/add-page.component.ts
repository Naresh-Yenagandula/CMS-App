import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagesService } from '../../pages.service';
import { page } from '../../page';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  addForm: FormGroup;
  pages?: page = { title: '', category: '', author: '' };
  message = "";

  category = ['category one', 'category two', 'category three'];
  author = ['John Wick', 'Vicky Nash', 'Jenni lora', 'Austen Paige'];

  constructor(private fb: FormBuilder, private pageService: PagesService) { }

  onSubmit(): void {
    this.pageService.addPages(this.pages).subscribe((data) => {
      this.message = "Page Added Sucessfully!";
    }
    );
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      categorySelected: ['', [Validators.required]],
      authorSelected: ['', [Validators.required]]
    })
  }

}
