import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPagesComponent } from './get-pages.component';

describe('GetPagesComponent', () => {
  let component: GetPagesComponent;
  let fixture: ComponentFixture<GetPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
