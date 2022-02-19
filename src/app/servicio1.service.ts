import { Injectable } from '@angular/core';

//Módulos necesarios para la comunicación AJAX
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/*
  Los servicios se generan con el comando: ng generate service nombre_servicio
  Solo tienen el fichero ts.
  Debe importarse en el módulo (app.module.ts)
*/

@Injectable({
  providedIn: 'root'
})
export class Servicio1 {

  constructor(private http: HttpClient) { }

  public enviar(texto:string){
    console.log(`Servicio1.enviar(${texto})`)
    const url = 'servicio1.php'
    const datos ={
      'texto': texto
    }
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }
}
