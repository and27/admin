import {Component} from "@angular/core";

@Component({
    selector: "cliente",
    template: `
<div style = "margin:30px; padding: 30px; background-color:rgba(255, 255, 255, 0.1)">
<table class="table tab1">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor ="let cliente of clientes">
      <th>{{cliente.Id}}</th>
      <td>{{cliente.nombre}}</td>
      <td>{{cliente.apellido}}</td>
      <td>{{cliente.correo}}</td>
    </tr>
  </tbody>
</table>
</div>
                
`,
styleUrls:["app/cliente.component.css"]
})

export class ClienteComponent{
   clientes=[{Id:1,nombre:"Andres",apellido:"Banda",correo:"asdf@asdf"},
       {Id:2,nombre:"Ber",apellido:"Banda",correo:"asdf@asdf"}  ]



    
}