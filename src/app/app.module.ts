import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ParquesComponent } from './parques/parques.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
