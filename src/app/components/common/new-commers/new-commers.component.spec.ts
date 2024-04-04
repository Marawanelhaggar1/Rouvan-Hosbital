import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommersComponent } from './new-commers.component';

describe('NewCommersComponent', () => {
  let component: NewCommersComponent;
  let fixture: ComponentFixture<NewCommersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCommersComponent]
    });
    fixture = TestBed.createComponent(NewCommersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
