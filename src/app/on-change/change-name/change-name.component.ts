import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.scss']
})
export class ChangeNameComponent implements OnInit, OnChanges {

  @Input()
  nome: string;

  nomeAnterior: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.hasOwnProperty('nome')) {
      this.nomeAnterior = changes['nome'].previousValue;
    }

  }

}
