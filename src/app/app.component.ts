import { Component } from '@angular/core';
//Router es un componente que permite navegar entre componentes
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaAngular';
  
  //private router:Router

  //Podemos saltarnos la declaración externa de una variable, es global (a esto se le llama inyección)
  constructor(private router:Router){
    this.router= router;
  }

  navegarAHome(){
    this.router.navigate(['']);
  }

  navegarAAcercaDe(){
    this.router.navigate(['acerca']);
  }
}
