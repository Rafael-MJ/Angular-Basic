import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoTelaComponent } from './topo-tela/topo-tela.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ex2CalculadoraComponent } from './ex2-calculadora/ex2-calculadora.component';
import { Ex1MediaComponent } from './ex1-media/ex1-media.component';
import { Ex3AlunoComponent } from './ex3-aluno/ex3-aluno.component';
import { Ex4SeguroComponent } from './ex4-seguro/ex4-seguro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopoTelaComponent,
    RodapeComponent,
    Ex2CalculadoraComponent,
    Ex1MediaComponent,
    Ex3AlunoComponent,
    Ex4SeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
