import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cursos';
  cursos = [];

  onAdicionarCurso(curso){
    this.cursos = [curso, ...this.cursos];
  }
}
