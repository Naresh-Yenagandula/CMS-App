import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  addForm: FormGroup;
  message = false;

  categorys = ['category one', 'category two', 'category three'];
  authors = ['John Wick', 'Vicky Nash', 'Jenni lora', 'Austen Paige'];

  constructor(private fb: FormBuilder, private pageService: PagesService) { }

  addPage(): void {
    this.pageService.addPages(this.addForm.value).subscribe((data) => {
      this.message = true;
    });
  }

  ngOnInit(): void {
    //form validation
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]]
    })
  }
}
