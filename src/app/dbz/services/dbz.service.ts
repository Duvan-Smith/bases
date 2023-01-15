import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('servicio');
  }

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 150000,
    },
    {
      nombre: 'Vegeta',
      poder: 140000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
}
