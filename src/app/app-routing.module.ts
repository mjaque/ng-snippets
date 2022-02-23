import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Componente1 } from './componente1/componente1.component'
import { Componente2 } from './componente2/componente2.component'
import { Componente3 } from './componente3/componente3.component'


const routes: Routes = [
  { path: 'ruta1', component: Componente1 },
  { path: 'ruta2', component: Componente2 },
  { path: 'ruta3', component: Componente3 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
