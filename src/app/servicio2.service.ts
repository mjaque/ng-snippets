import { Injectable } from '@angular/core';

//Módulos necesarios para la comunicación AJAX
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Servicio2 {

  constructor(private http: HttpClient) {}

  public enviar(imagenBase64: string): Observable<Response> {
    /*const formData = new FormData();
    formData.append('image', image);
    return this.http.post('/api/v1/image-upload', formData);
    */
    console.log(`Servicio2.uploadImage()`)
    const url = 'servicio2.php'
    const datos ={
      'imagen': imagenBase64
    }
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }
    console.log(bodyJSON)
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }
}
