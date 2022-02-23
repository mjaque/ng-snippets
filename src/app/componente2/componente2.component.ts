import { Component, OnInit } from '@angular/core';
import { Servicio2 } from '../servicio2.service';

//Referencia: https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/

@Component({
  selector: 'componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2 implements OnInit {

  ficheroBase64: string;

  constructor(private servicio: Servicio2) { }

  procesarImagen(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', (event: any) => {
      file.text().then(texto => this.ficheroBase64 = texto)
    })
    reader.readAsDataURL(file)
  }

  enviar() {
    console.log("componente2.enviar()")
    console.log(this.ficheroBase64)
    //En lugar de la función flecha, llamar a un método del componente.
    this.servicio.enviar(this.ficheroBase64).subscribe(
      res => console.log(res),
      err => console.error(err))
  }

  ngOnInit(): void {
  }

}
