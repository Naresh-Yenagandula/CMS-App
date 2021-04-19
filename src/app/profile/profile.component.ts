import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  edit():boolean{
    this.router.navigate(['edit'],{relativeTo:this.route});
    return true;
  }
  get():boolean{
    this.router.navigate(['profile']);
    return true;
  }
  changePassword():boolean{
    this.router.navigate(['changePassword'],{relativeTo:this.route});
    return true;
  }

  ngOnInit(): void {
  }

}
