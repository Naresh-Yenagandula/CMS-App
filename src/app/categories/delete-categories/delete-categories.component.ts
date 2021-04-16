import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css'],
})
export class DeleteCategoriesComponent implements OnInit {
  message: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private catservice: CategoriesService
  ) {}
  deleteCategory(): void {
    if (confirm('Are you sure to delete this') == true) {
      const id = this.route.snapshot.paramMap.get('id');
      this.catservice.deleteCategory(id).subscribe((data) => {
        this.message = true;
      });
    }
  }

  ngOnInit(): void {}
}
