import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users: any = [];
  pNo: number = 1;
  limit: number = 5;
  total: number;

  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) { }

  getUsers(p): void {
    let offset = (p - 1) * this.limit;
    this.userService.getUsers(offset,).subscribe((info) => {
      this.users = info;
    });
    this.total = this.users.no;
  }
  navigate(p): void {
    this.router.navigate(['users/get/' + p]);
    this.getUsers(p);
    this.pNo = p;
  }
  update(id): void {
    this.router.navigate(['users/updateUser/' + id]);
  }
  delete(id): void {
    this.router.navigate(['users/deleteUser/' + id]);
  }

  ngOnInit(): void {
    this.pNo = parseInt(this.route.snapshot.paramMap.get('no'));
    if (isNaN(this.pNo)) {
      this.getUsers(1);
    } else {
      this.getUsers(this.pNo);
    }
  }
}
