import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriesService } from './categories.service';
import { Observable } from 'rxjs';
import {category} from './category';
import { JsonPipe } from '@angular/common';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let c:category;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CategoriesService]
    });
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return observable',()=>{
  //   expect(service.getCategory).toEqual(jasmine.any(JsonPipe));
  // })

  // it('Should execute add category once',()=>{
  //   spyOn(service,'addcategory');
  //   service.addcategory(c);
  //   expect(service.addcategory.).toBe(1);

  // })
});
