import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cursos';
  cursos: { id: number, nome: string, carga:number}[] = [
    {"id": 0, "nome": "Banco de dados", "carga":40},
    {"id": 1, "nome": "Javascript", "carga":25},
    {"id": 2, "nome": "Ruby", "carga":50},
    {"id": 3, "nome": "Java", "carga":20},
    {"id": 4, "nome": "Testes", "carga":30}
  ]
}
