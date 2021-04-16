import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css'],
})
export class DeletePageComponent implements OnInit {
  message: boolean = false;
  constructor(
    private pageService: PagesService,
    private route: ActivatedRoute
  ) {}

  deletePage(): void {
    if (confirm('Are you sure to delete this record ?') == true) {
      const id = this.route.snapshot.paramMap.get('id');
      this.pageService.deletePage(id).subscribe((data) => {
        this.message = true;
      });
    }
  }

  ngOnInit(): void {
    this.deletePage();
  }
}
