import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstadComponent } from './addstad.component';

describe('AddstadComponent', () => {
  let component: AddstadComponent;
  let fixture: ComponentFixture<AddstadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
