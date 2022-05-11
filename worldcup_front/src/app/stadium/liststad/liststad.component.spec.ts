import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstadComponent } from './liststad.component';

describe('ListstadComponent', () => {
  let component: ListstadComponent;
  let fixture: ComponentFixture<ListstadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
