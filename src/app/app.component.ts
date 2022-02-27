import { Component } from '@angular/core';
import { JsonServiceService } from './json-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recetas';

  lista = [];
  name: string[] = [];
  description: string[] = [];
  ingredients: string[] = [];
  time: string[] = [];
  steps: string[] = [];
  mostrar : boolean = false;

  constructor(public recetas: JsonServiceService){
    this.recetas.getJson('assets/recetas.json').subscribe((res : any) => {
      this.lista = res;
    });
  }

  recetaAlAzar(): void{
    this.mostrar = true;
    let numero = Math.floor(Math.random() * this.lista.length);
    this.name = this.lista[numero]['name'];
    this.description = this.lista[numero]['description'];
    this.ingredients = this.lista[numero]['ingredients'];
    this.time = this.lista[numero]['time'];
    this.steps = this.lista[numero]['steps'];
  }

}