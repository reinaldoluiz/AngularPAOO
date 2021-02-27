import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowCursoComponent } from './show-curso/show-curso.component';
import { IndexCursosComponent } from './index-cursos/index-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCursoComponent,
    IndexCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
