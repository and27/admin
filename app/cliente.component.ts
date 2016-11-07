import {Component} from "@angular/core";
import {AppService} from "./app.service";
import {Pedido} from "./app.component";

@Component({
    selector:"cliente",
    
    template: `

<div class="col-md-9" >
<div  style = "margin:30px; padding: 30px; background-color:rgba(255, 255, 255, 0.1)">
<table class="table tab1">

  <thead>
  <h3 class="text-center">Clientes</h3>
    <tr>
     
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo</th>
      <th>Telefono</th>
      <th>Direccion</th>
      <th>Detalles</th>
      
  
    </tr>
  </thead>
  <tbody>
    <tr (click)="mostrar(cliente)" #client *ngFor ="let cliente of clientes">
    
      <td>{{cliente.nombre}}</td>
      <td>{{cliente.apellido}}</td>
      <td>{{cliente.correo}}</td>
      <td>{{cliente.telefono}}</td>
       <td>{{cliente.direccion1}}</td>
       <td><button (click)="ver()" class="btn btn-primary"><span class="glyphicon glyphicon-plus-sign"></span></button></td>
       
    </tr>
  </tbody>
</table>
</div >
</div>
<div class="col-md-3" *ngIf="current"><h3>Detalles</h3>
<table class="table tab1">
<tr>
<td>Nombre:</td><td>{{current.nombre}}</td>
</tr><tr>
<td>Apellido:</td><td>{{current.apellido}}</td>
</tr><tr>
<td>Correo:</td><td>{{current.correo}}</td>
</tr><tr>
<td>Telefono:</td><td>{{current.telefono}}</td>
</tr><tr>
<td>Direccion 1:</td><td>{{current.direccion1}}</td>
</tr><tr>
<td>Direccion 2:</td><td>{{current.direccion2}}</td>
</tr><tr>
<td>Pais:</td><td>{{current.pais}}</td>
</tr><tr>
<td>Estado:</td><td>{{current.estado}}</td>
</tr><tr>
<td>Ciudad:</td><td>{{current.ciudad}}</td>
</tr><tr>
<td>Codigo Postal:</td><td>{{current.codigo_postal}}</td>
</tr>
</table>
      
 
 </div>
                
`,
styleUrls:["app/cliente.component.css"]
})

export class ClienteComponent{
    constructor(private appservice:AppService){
        this.getPedidos();
    }
current:Pedido;
clientes:Pedido[];
show=false;

    getPedidos() {

        this.appservice.getC()
            .subscribe(pedidos => this.clientes = pedidos);


    }

    mostrar(cliente){

        this.current=cliente;
    }



}