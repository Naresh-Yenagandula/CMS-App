import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private userService: UsersService, private snack: MatSnackBar) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    this.userService.getName().subscribe((data) => {
      if (expectedRole !== data.name.group) {
        this.snack.open('You do not have access to this page:', 'OK');
        this.router.navigate(['dashboard']);
        return false;
      } else {
        return true;
      }
    })
    return true;
  }
}
