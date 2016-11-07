import { Component } from '@angular/core';

export class Pedido {
  id: number;
  correo: string;
  telefono:number;
  nombre:string;
  apellido:string;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  
})

export class AppComponent {

}