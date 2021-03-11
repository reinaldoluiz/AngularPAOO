import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome, carga){
    const curso = {nome, carga};
    this.cursoAdicionado.emit(curso);
  }
}
