import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {

  nome: string;
  idade: number;

  cliente = {
    nome: "",
    sobrenome: "",
    email: "",
    dataNascimento: new Date().toISOString().substring(0, 10)
  }

  constructor() { }

  ngOnInit() {
  }



}
