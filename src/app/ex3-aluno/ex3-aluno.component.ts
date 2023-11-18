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
  celular: number = 0;

  public verifyEmail() {
    let symbolChar = 0;
    let verifyed = false;

    if(this.mail.length != 0) {
      for(let i = 0; i < this.mail.length; i++){
        if (this.mail.charAt(i) === '@') {
          symbolChar = i;
          window.alert("gg")
          for(let j = symbolChar; j < this.mail.length; j++){
            window.alert(j);
            if (this.mail.charAt(j) === '.')
              verifyed = true;
              break;
          }
        }
      }
    }
    return verifyed;
  }

  public verifyPhone() {
    let verifyed = false;

    if (String(this.celular).length == 11) {
      return true;
    } else {
      window.alert("Para o celular, insira onze(11) números no formato: 00000000000");
      return false;
    }
    return false;
  }

  public calcular() {
    if (this.verifyEmail() && this.verifyPhone() && this.nome !== "")
      window.alert("Aluno Cadastrado!");
    else
      window.alert("Erro!");
  }
}
