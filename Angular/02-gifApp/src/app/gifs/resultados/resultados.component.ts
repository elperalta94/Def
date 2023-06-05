import { Component } from '@angular/core';
import { GifsServices } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsServices.resultados;
  }

  constructor( private gifsServices: GifsServices) { }


}
