import {Component} from "@angular/core";
import {AppService} from "./app.service";
import {Pedido} from "./app.component";

@Component({
   
    template: `


<div class="col-md-8" style = "margin:30px; padding: 30px; background-color:rgba(255, 255, 255, 0.1)">
<table class="table tab1">
  <thead>
   <h3 class="text-center">Pedidos</h3>
    <tr>
      <th>Id_pedido</th>
      <th>Id_item</th>
      <th>Id_CLiente</th>
      <th>Cantidad</th>
      <th>Estado</th>
      <th>Subtotal</th>
      <th>Detalles</th>
    </tr>
  </thead>
  <tbody>
    <tr (click)="mostrar(pedido)" *ngFor ="let pedido of pedidos">
      <th>{{pedido.id_pedido}}</th>
      <td>{{pedido.nombre_item}}</td>
      <td></td>
      <td>{{pedido.cantidad}}</td> 
     <td><input size="5" placeholder="null"></td>
           <td>{{pedido.subtotal}}</td>
      <td><button (click)="ver()" class="btn btn-primary"><span class="glyphicon glyphicon-plus-sign"></span></button></td>
    </tr>
  </tbody>
</table>
</div>
<div class="col-md-3" *ngIf="current"><h3>Detalles</h3>
<table class="table tab1">
<tr><td>Nombre:</td><td>{{current.id_pedido}}</td></tr>
<tr><td>Id_item:</td><td>{{current.id_item}}</td></tr>
<tr><td>Nombre_item:</td><td>{{current.nombre_item}}</td></tr>
<tr><td>Tipo_item:</td><td>{{current.tipo_item}}</td></tr>
<tr><td>Id_producto:</td><td>{{current.id_producto}}</td></tr>
<tr><td>Cantidad:</td><td>{{current.cantidad}}</td></tr>
<tr><td>Subtotal:</td><td>{{current.subtotal}}</td></tr>
<tr><td>Subtotal_iva:</td><td>{{current.subtotal_iva}}</td></tr>

</table>
</div>
                
`,
    styleUrls:["app/cliente.component.css"]
})

export class PedidoComponent{
    constructor(private appservice:AppService){
        this.getPedidos();
    }

    pedidos:Pedido[];
    current:Pedido;

    getPedidos() {

        this.appservice.getP()
            .subscribe(pedidos => this.pedidos = pedidos);


    }
    mostrar(cliente){

        this.current=cliente;
    }





}