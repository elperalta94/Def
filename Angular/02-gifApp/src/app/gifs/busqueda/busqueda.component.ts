import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServices } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifServices: GifsServices ) {}

  buscar( ){

   const valor = this.txtBuscar.nativeElement.value;

   if ( valor.trim().length === 0 ){
    return;
   }

   this.gifServices.buscarGifs(valor);

   this.txtBuscar.nativeElement.value = '';
  }

}
