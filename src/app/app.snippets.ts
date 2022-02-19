import { Component } from '@angular/core';

/**
  Componente raíz de la aplicación.
  Está cargado en index.html.
  Se declara en el módulo (app.module.ts)
**/
@Component({
  selector: 'app-snippets',
  templateUrl: './app.snippets.html',
  styleUrls: ['./app.snippets.css']
})
export class AppSnippets {
  title = 'ng-snippets';
}
