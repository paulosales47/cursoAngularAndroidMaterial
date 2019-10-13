import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  ngOnInit() {
  }

  recebeValor(valorRecebido: number) {
    this.valor += valorRecebido;
  }

}
