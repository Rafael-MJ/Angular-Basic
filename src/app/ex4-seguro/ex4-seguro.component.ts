import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-seguro',
  templateUrl: './ex4-seguro.component.html',
  styleUrls: ['./ex4-seguro.component.css']
})
export class Ex4SeguroComponent {
  idade: number = 0;
  nome: string = '';
  sexo: string = '0';
  valor_veiculo: number = 0;

  public isNotUpperResult() {
    return null;
  }

  public isNotLowerResult() {
    return null;
  }

  public calcular() {
  
  }
}
