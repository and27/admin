import { NgModule}        from '@angular/core';
import {HttpModule}       from "@angular/http"
import { BrowserModule}  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ClienteComponent }  from './cliente.component';
import { PedidoComponent }  from './pedidos.component';
import { AppService }  from './app.service';
import { AppRoutingModule }     from './routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule


  ],
  providers:[AppService],
  
  declarations: [
    AppComponent,
    ClienteComponent,
    PedidoComponent  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }