import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppSnippets } from './app.snippets';
import { Componente1 } from './componente1/componente1.component';
import { Componente2 } from './componente2/componente2.component';

//Habilitamos el servicio HTTP
import { HttpClientModule } from '@angular/common/http';

/*
  Las aplicaciones de Angular se componen de "módulos"
  Un módulo es un grupo de componentes.
  Se declaran en un archivo ts (app.module.ts)
  Se importan en la aplicación en main.ts
*/

@NgModule({
  /* Componentes de este módulo */
    declarations: [
    AppSnippets,
    Componente1,
    Componente2
  ],
  /* Módulos que son utilizados por este módulo */
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppSnippets]
})
export class AppModulo1 { }
