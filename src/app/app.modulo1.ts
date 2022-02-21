import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppSnippets } from './app.snippets';
import { Componente1 } from './componente1/componente1.component';
import { Componente2 } from './componente2/componente2.component';
import { Componente3 } from './componente3/componente3.component';

//Habilitamos el servicio HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

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
    Componente2,
    Componente3
  ],
  /* Módulos que son utilizados por este módulo */
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppSnippets]
})
export class AppModulo1 { }
