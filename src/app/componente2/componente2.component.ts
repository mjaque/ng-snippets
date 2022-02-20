import { Component, OnInit } from '@angular/core';
import { Servicio2 } from '../servicio2.service';

//Referencia: https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/

@Component({
  selector: 'componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2 implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private servicio: Servicio2) { }

  procesarImagen(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file)
    })
    reader.readAsDataURL(file)
  }

  enviar() {
    console.log("componente2.enviar()")
    console.log(this.selectedFile)
    //En lugar de la función flecha, llamar a un método del componente.
    this.servicio.enviar(this.selectedFile).subscribe(
      res => console.log(res),
      err => console.error(err))
  }

  ngOnInit(): void {
  }

}

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
