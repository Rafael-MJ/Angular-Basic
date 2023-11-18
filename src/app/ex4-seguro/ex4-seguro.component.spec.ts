import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4SeguroComponent } from './ex4-seguro.component';

describe('Ex4SeguroComponent', () => {
  let component: Ex4SeguroComponent;
  let fixture: ComponentFixture<Ex4SeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex4SeguroComponent]
    });
    fixture = TestBed.createComponent(Ex4SeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
