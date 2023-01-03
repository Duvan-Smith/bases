import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
        <h1> {{titulo}} </h1>
        <h2> La base es: <strong>{{base}}</strong> </h2>

        <h3>Sumar forma 1</h3>
        <button (click)="numero=numero+1"> +1 </button>
        <span> {{numero}} </span>
        <button (click)="numero=numero-1"> -1 </button>

        <h3>Sumar forma 2</h3>
        <button (click)="acumular(+2)"> +2 </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-2)"> -2 </button>

        <h3>Sumar forma 3</h3>
        <button (click)="acumular(+base)"> +{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)"> -{{base}} </button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;
  
    acumular(valor: number) {
      this.numero += valor;
    }
}