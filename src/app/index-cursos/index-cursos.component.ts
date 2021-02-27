import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-index-cursos',
  templateUrl: './index-cursos.component.html',
  styleUrls: ['./index-cursos.component.css']
})
export class IndexCursosComponent {

  @Input() cursos: any[];

}
