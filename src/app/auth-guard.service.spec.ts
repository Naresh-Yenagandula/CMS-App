import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuardService } from './auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let route:ActivatedRouteSnapshot
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,MatSnackBarModule],
      providers:[AuthGuardService]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should return true',()=>{
  //   expect(service.canActivate(route)).toEqual(true);
  // })
});
