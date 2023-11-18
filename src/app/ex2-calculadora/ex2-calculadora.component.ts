import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-calculadora',
  templateUrl: './ex2-calculadora.component.html',
  styleUrls: ['./ex2-calculadora.component.css'],
})
export class Ex2CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;
  operacao: string = '0';

  public calcular() {
    if (this.n1 != 0 && this.n2 != 0) {
      switch (this.operacao) {
        case '0':
          this.resultado = this.n1 + this.n2;
          break;
        case '1':
          this.resultado = this.n1 - this.n2;
          break;
        case '2':
          this.resultado = this.n1 / this.n2;
          break;
        case '3':
          this.resultado = this.n1 * this.n2;
          break;
      }
    } else {
      window.alert('Não utilize "0"!');
    }
  }
}
