import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent }   from './pedidos.component';
import { ClienteComponent }   from './cliente.component';

const routes: Routes = [
    { path: '', redirectTo: '/cliente', pathMatch: 'full' },
    { path: 'cliente',  component: ClienteComponent },
    { path: 'pedido',  component: PedidoComponent }

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}