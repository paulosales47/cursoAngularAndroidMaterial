import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss']
})
export class ChildItemComponent implements OnInit {

  @Input() titulo: string;

  @Output() alterarValor = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  alterarValorClick(valor: number) { this.alterarValor.emit(valor) };


}
