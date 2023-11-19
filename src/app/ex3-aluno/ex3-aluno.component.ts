import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3-aluno',
  templateUrl: './ex3-aluno.component.html',
  styleUrls: ['./ex3-aluno.component.css']
})

export class Ex3AlunoComponent {
  ra: number = 0;
  nome: string = '';
  mail: string = '';
  celular: number = 5511000000000;
  alunos: any[] = [];

  public verifyEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(this.mail)) {
      return true;
    } else {
      window.alert("Insira um e-mail válido no formato: example@mail.com");
      return false;
    }
  }

  public verifyPhone() {
    let verifyed = false;

    if (String(this.celular).length === 13) {
      return true;
    } else {
      window.alert("Para o celular, insira treze(13) números no formato: 5500111111111");
      return false;
    }
  }

  public calcular() {
    if (this.verifyEmail() && this.verifyPhone() && this.nome.trim() !== "") {
      window.alert("Aluno Cadastrado!");
      return true;
    } else {
      window.alert("Preencha os Campos Devidamente!");
      return false;
    }
  }

  public onSubmit() {
    if (this.calcular()) {
      const novoAluno = {
        ra: this.ra,
        nome: this.nome,
        email: this.mail,
        celular: this.celular
      };

    this.alunos.push(novoAluno);
    }
  }
}
