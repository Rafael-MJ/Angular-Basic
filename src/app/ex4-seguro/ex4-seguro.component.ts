import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-seguro',
  templateUrl: './ex4-seguro.component.html',
  styleUrls: ['./ex4-seguro.component.css']
})
export class Ex4SeguroComponent {
  nome: string = '';
  sexo: string = '0';
  idade: number = 18;
  veiculo: number = 0;
  clientes: any[] = [];

  public percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  } 

  public calcApolice() {
    if (this.sexo === "0" && this.idade <= 25) {
      return this.percentage(15, this.veiculo).toPrecision(4);
    } else if (this.sexo === "0" && this.idade > 25) {
      return this.percentage(10, this.veiculo).toPrecision(4);
    } else {
      return this.percentage(8, this.veiculo).toPrecision(4);
    }
  }

  public onSubmit() {
    window.alert("Cliente Cadastrado!");

    const novoCliente = {
      nome: this.nome,
      sexo: this.sexo,
      idade: this.idade,
      veiculo: 'R$' + this.veiculo,
      apolice: 'R$' + this.calcApolice()
    };

    this.clientes.push(novoCliente);
  }
}
