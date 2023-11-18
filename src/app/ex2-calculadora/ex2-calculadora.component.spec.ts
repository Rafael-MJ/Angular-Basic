import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CalculadoraComponent } from './ex2-calculadora.component';

describe('Ex2CalculadoraComponent', () => {
  let component: Ex2CalculadoraComponent;
  let fixture: ComponentFixture<Ex2CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex2CalculadoraComponent]
    });
    fixture = TestBed.createComponent(Ex2CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
