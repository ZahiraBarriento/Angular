import { Component, OnInit } from '@angular/core';
import { Persona } from '../../classes/persona';

interface IPersona{
  nombre: string;
  apellido: string;
  edad:number;
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  mostrarCondicional = false;
  persona : IPersona = {
    nombre:'',
    apellido:'',
    edad: 0,
  };
  listaNombres=[];
  
  constructor() { 
    this.persona.nombre = 'Juan';
    this.persona.apellido= 'Perez';
    this.persona.edad = 20;
    this.listaNombres.push(this.persona);
  }

  ngOnInit(){
  }

  manejadora()
  {
    this.mostrarCondicional = !this.mostrarCondicional;
    //this.listaNombres.push(this.persona);
  }

  onCargar(persona)
  {
    console.log(persona);
    this.listaNombres.push(persona);
  }
  
}
