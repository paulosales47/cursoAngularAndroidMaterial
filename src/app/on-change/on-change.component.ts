import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnInit {

  nome: string;
  novoNome: string;

  constructor() { }

  ngOnInit() {
  }

  alterarNome() {
    this.novoNome = this.nome;
  }
}
