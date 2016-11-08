import {Component} from "@angular/core";
import {AppService} from "./app.service";


@Component({
   
    template: `


<div class="col-md-8" style = "margin:30px; padding: 30px; background-color:rgba(255, 255, 255, 0.1)">
<table class="table tab1">
  <thead>
   <h3 class="text-center">Pedidos</h3>
    <tr>
      <th>Id_pedido</th>
      <th>Nombre_item</th>
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
      <td>{{pedido.cantidad}}</td> 
      <td>{{estado}}</td>
      <td>{{pedido.subtotal}}</td>
      <td><button (click)="ver()" class="btn btn-primary"><span class="glyphicon glyphicon-plus-sign"></span></button></td>
    </tr>
  </tbody>
</table>
</div>
<div class="col-md-3" *ngIf="current"><h3>Detalles</h3>
<table class="table tab1">
<tr><td>Id_pedido:</td><td>{{current.id_pedido}}</td></tr>
<tr><td>Fecha_pedido:</td><td>{{current.cliente.fecha_pedido}}</td></tr>
<tr><td>Total_pedido</td><td>{{current.cliente.total_pedido}}</td></tr>
<tr><td>Estado:</td><td><input size="7" placeholder="null" [(ngModel)]="estado"></td></tr>
<tr><td>Id_item:</td><td>{{current.id_item}}</td></tr>
<tr><td>Nombre_item:</td><td>{{current.nombre_item}}</td></tr>
<tr><td>Tipo_item:</td><td>{{current.tipo_item}}</td></tr>
<tr><td>Id_producto:</td><td>{{current.id_producto}}</td></tr>
<tr><td>Cantidad:</td><td>{{current.cantidad}}</td></tr>
<tr><td>Subtotal:</td><td>{{current.subtotal}}</td></tr>
<tr><td>Subtotal_iva:</td><td>{{current.subtotal_iva}}</td></tr>
<tr><td>Nombre_cliente:</td><td>{{current.cliente.nombre}}</td></tr>
<tr><td>Apellido_cliente</td><td>{{current.cliente.apellido}}</td></tr>
<tr><td>Correo_cliente</td><td>{{current.cliente.correo}}</td></tr>
<tr><td>Pais_cliente</td><td>{{current.cliente.pais}}</td></tr>
<tr><td>Ciudad_cliente</td><td>{{current.cliente.ciudad}}</td></tr>
<tr><td>Codigo_postal</td><td>{{current.cliente.codigo_postal}}</td></tr>


</table>
</div>
                
`,
    styleUrls:["app/cliente.component.css"]
})

export class PedidoComponent{
    constructor(private appservice:AppService){
        this.getP();
        this.getC()
    }


    pedidos=[]
    current;
    clientes=[];


    getC () {
        this.appservice.getC()
            .subscribe(cliente => this.clientes = cliente);
    }


    getP() {

        this.appservice.getP()
            .subscribe(pedido => this.pedidos = pedido);


    }




    mostrar(pedido){

        this.current=pedido;
    }

    ver(){
        this.clientes.forEach(cliente=>{
            this.pedidos.forEach(pedido=>{if(cliente.id_pedido==pedido.id_pedido){pedido.cliente=cliente;console.log(this.pedidos);}

            })});
        
    }

    





}