import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  // templateUrl:'./tienda/tienda.component',
  templateUrl: './tienda.component.html',
  // template:'<h1>{{titulo}}</h1>',
  styleUrls: ['./tienda.component.css']
  // styles:['h1 {color:dark}']
})
export class TiendaComponent implements OnInit {
 public titulo;
 public nombreDelParque:string;
 
  constructor() { 
    this.titulo = 'Hello world';
    this.nombreDelParque=''
  }
  mostrarNombre(){
    console.log(this.nombreDelParque);
  }

  ngOnInit(): void {
  }

}
