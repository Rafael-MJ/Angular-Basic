import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1-media',
  templateUrl: './ex1-media.component.html',
  styleUrls: ['./ex1-media.component.css'],
})
export class Ex1MediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: string = '';

  public isNotUpperResult() {
    return this.ac1 <= 10 && this.ac2 <= 10 && this.af <= 10 && this.ag <= 10;
  }

  public isNotLowerResult() {
    return this.ac1 >= 0 && this.ac2 >= 0 && this.af >= 0 && this.ag >= 0;
  }

  public calcular() {
    if (this.isNotLowerResult() && this.isNotUpperResult()) {
      let r = this.ac1 * 0.15;
      let r2 = this.ac2 * 0.3;
      let r3 = this.ag * 0.1;
      let r4 = this.af * 0.45;
      this.resultado = (r + r2 + r3 + r4).toPrecision(3);

      if (Number.parseFloat(this.resultado) >= 5) window.alert('Aluno Aprovado!');
      else window.alert('Aluno Reprovado!');
    
    } else {
      window.alert('Utilize apenas valores válidos (0 a 10)!');
    }
  }
}
