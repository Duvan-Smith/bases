import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor(private dbzService:DbzService){
  }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 150000,
    },
    {
      nombre: 'Vegeta',
      poder: 140000,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000,
  };

  agregarEvent(event: any) {
    event.preventDefault();
    console.log(this.nuevo);
  }

  cambiarNombre(event: any) {
    event.preventDefault();
    console.log(event.target.value);
  }

  agregarNuevoPersonaje(personaje:Personaje){
    // debugger;
    this.personajes.push(personaje);
  }
}
