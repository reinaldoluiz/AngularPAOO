import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowCursoComponent } from './show-curso/show-curso.component';
import { IndexCursosComponent } from './index-cursos/index-cursos.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCursoComponent,
    IndexCursosComponent,
    CursoCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
