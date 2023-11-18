import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex2CalculadoraComponent } from './ex2-calculadora/ex2-calculadora.component';
import { Ex1MediaComponent } from './ex1-media/ex1-media.component';
import { Ex3AlunoComponent } from './ex3-aluno/ex3-aluno.component';
import { Ex4SeguroComponent } from './ex4-seguro/ex4-seguro.component';

const routes: Routes = [
  {path : '', redirectTo : 'calculadora', pathMatch : 'full'},
  { path: 'calculadora', component: Ex2CalculadoraComponent },
  { path: 'calculadora-media', component: Ex1MediaComponent },
  { path: 'cadastro-aluno', component: Ex3AlunoComponent },
  { path: 'apolice', component: Ex4SeguroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
