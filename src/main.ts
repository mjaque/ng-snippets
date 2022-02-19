import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModulo1 } from './app/app.modulo1';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Aquí se declara el módulo inicial de la aplicación
platformBrowserDynamic().bootstrapModule(AppModulo1)
  .catch(err => console.error(err));
