import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from "../../pages.service";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  updateForm: FormGroup;
  message:boolean=false;

  categorys = ['category one', 'category two', 'category three'];
  authors = ['John Wick', 'Vicky Nash', 'Jenni lora', 'Austen Paige'];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private pageService: PagesService) { }

  updateDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageService.updatePage(this.updateForm.value, id).subscribe((data) => {
      this.message = true;
    }, (error) => {
      this.message = false;
    })
  }
  getPageDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageService.getPage(id).subscribe((data) => {
      this.updateForm.setValue({
        title: data.title,
        category: data.category,
        author: data.author
      })
    })
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]]
    })
    this.getPageDetail();
  }

}
