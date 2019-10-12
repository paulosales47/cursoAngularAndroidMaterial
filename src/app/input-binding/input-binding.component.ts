import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input('name') nome: string;
  @Input('age') idade: number;

  @Input() cliente: Cliente;

  constructor() { }

  ngOnInit() {
  }

}
