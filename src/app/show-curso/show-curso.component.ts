import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-curso',
  templateUrl: './show-curso.component.html',
  styleUrls: ['./show-curso.component.css']
})
export class ShowCursoComponent{

  @Input() cursos: any[];

}
