import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1MediaComponent } from './ex1-media.component';

describe('Ex1MediaComponent', () => {
  let component: Ex1MediaComponent;
  let fixture: ComponentFixture<Ex1MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex1MediaComponent]
    });
    fixture = TestBed.createComponent(Ex1MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
