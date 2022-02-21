import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Componente2 } from './componente2/componente2.component'
import { Componente3 } from './componente3/componente3.component'


const routes: Routes = [
  { path: 'componente2', component: Componente2 },
  { path: 'componente3', component: Componente3 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
