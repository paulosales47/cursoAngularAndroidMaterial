import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  private _nome: string = "";

  @Input() set nome(nome: string = "") {
    this._nome = "Seu nome é: ".concat(nome);
  }

  get nome(): string{
    return this._nome;
  }

  constructor() { }

  ngOnInit() {
  }

}
