import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-input-binding-com-objetos',
  templateUrl: './input-binding-com-objetos.component.html',
  styleUrls: ['./input-binding-com-objetos.component.scss']
})
export class InputBindingComObjetosComponent implements OnInit {

  clientes: Cliente[] = [
    { nome: 'Bob', idade: 24 },
    { nome: 'Sofia', idade: 22 },
    { nome: 'Marcos', idade: 30 },
    { nome: 'Carla', idade: 19 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
