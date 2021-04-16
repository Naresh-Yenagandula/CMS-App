import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  message:boolean=false;
  constructor(private userService:UsersService,private route:ActivatedRoute) { }

  deleteUser():void{
    if(confirm("Are you sure to delete this record ?")==true){
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.deleteUser(id).subscribe((data)=>{
      this.message=true;
    })
  }
  }

  ngOnInit(): void {
    this.deleteUser();
  }

}
