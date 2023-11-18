import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3AlunoComponent } from './ex3-aluno.component';

describe('Ex3AlunoComponent', () => {
  let component: Ex3AlunoComponent;
  let fixture: ComponentFixture<Ex3AlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex3AlunoComponent]
    });
    fixture = TestBed.createComponent(Ex3AlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
