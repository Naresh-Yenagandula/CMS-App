import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  title = new FormControl('',[Validators.required]);
  categorySelected = new FormControl('',[Validators.required]);
  authorSelected = new FormControl('',[Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

}
