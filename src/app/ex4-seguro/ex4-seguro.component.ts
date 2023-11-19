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
  veiculo: string = '';
  clientes: any[] = [];

  public onSubmit() {
    window.alert("Aluno Cadastrado!");

    const novoCliente = {
      nome: this.nome,
      sexo: this.sexo,
      idade: this.idade,
      veiculo: this.veiculo
    };

    this.clientes.push(novoCliente);
  }
}
