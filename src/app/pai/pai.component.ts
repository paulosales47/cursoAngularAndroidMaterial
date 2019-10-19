import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  @ViewChild(TimerComponent, { static: false })
  private timer: TimerComponent;

  @ViewChild('timer2', { static: false })
  private timer2: TimerComponent;

  @ViewChild('paragrafo', { static: false })
  private paragrafo: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.paragrafo);
  }

  iniciar() {
    this.timer.iniciar();
    this.timer2.iniciar();
  }
  parar() {
    this.timer.parar();
    this.timer2.parar();
  }
  limpar() {
    this.timer.limpar();
    this.timer2.limpar();
  }

}
