import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ClienteComponent }  from './cliente.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

  ],
  declarations: [
    AppComponent,
    ClienteComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }