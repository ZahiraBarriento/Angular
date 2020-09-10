import { Component, OnInit } from '@angular/core';

interface IPersona{
  nombre: string;
  apellido: string;
}
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit 
{
  /*ONE-way binding
   ts -> html
   Interpolacion; {{}}
   Propiedades: [] o bind-target o ngClass o ngStyle
   Eventos: () */

   /*TWO-way
    banana box: [()], ngModel*/
  title = "Hola mundo!";
  src = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg";
  click = "Evento";
  persona : IPersona = {
    nombre:'',
    apellido:''
  };

  //Primero siempre se ejecuta el constructor
  constructor() { 
    console.log("contructor");
    this.persona.nombre = 'Juan';
    this.persona.apellido= 'Perez';
  }

  //y luego se ejecuta el ngOnInit
  ngOnInit(){
    console.log("ngOnInit");
  }

  manejadora(event)
  {
    console.log(event);
    console.log(this.persona);
  }

}
