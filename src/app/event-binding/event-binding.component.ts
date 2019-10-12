import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  corBotao: string = ""

  constructor() { }

  ngOnInit() {
  }

  excluir() {
    console.log('Click');
  }

  focusExcluir() {
    this.corBotao = "warn";
  }

  resetButton() {
    this.corBotao = "";
  }

}
