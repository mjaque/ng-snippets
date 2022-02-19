import { Component, OnInit } from '@angular/core';
import { Servicio1 } from '../servicio1.service';

/**
  Un componente se crea con el comando: ng generate component nombre_componente
  Se genera en su propio directorio
  Es como "una vista" que tiene tres cuatro ficheros: css, html, ts y spec.ts
  Se importa y se declara en app.module.ts
**/

@Component({
  selector: 'componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1 implements OnInit {

  constructor(private servicio:Servicio1) { }

  ngOnInit(): void {
  }

  //Métodos
  /* Los métodos de atención a eventos se captura con (evento) en el html */
  enviar(){
    console.log("componente1.enviar()")
    let datos = ""
    datos = document.getElementsByTagName('input')[0].value
    //En lugar de la función flecha, llamar a un método del componente.
    this.servicio.enviar(datos).subscribe(res => console.log(res))
  }

}
