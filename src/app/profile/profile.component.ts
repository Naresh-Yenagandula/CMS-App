import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  edit():void{
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  get():void{
    this.router.navigate(['profile'])
  }
  changePassword():void{
    this.router.navigate(['changePassword'],{relativeTo:this.route});
  }

  ngOnInit(): void {
  }

}
