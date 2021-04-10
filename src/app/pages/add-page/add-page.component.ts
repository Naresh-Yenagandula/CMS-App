import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  title = new FormControl('',[Validators.required]);
  categorySelected = new FormControl('',[Validators.required]);
  authorSelected = new FormControl('',[Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

}
