import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {

  @Input()listaNombres:Persona[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaNombres);
  }

}
