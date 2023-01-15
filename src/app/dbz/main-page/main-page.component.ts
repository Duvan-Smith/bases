import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  agregarEvent(event:any){
    event.preventDefault();
    console.log("pruebas con event")
  }
  agregar(){
    console.log("pruebas")
  }
}
