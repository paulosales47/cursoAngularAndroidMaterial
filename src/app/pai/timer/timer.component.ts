import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  miliSegundos: number = 0;
  emExecucao: boolean;
  interval: any;

  constructor() { }

  ngOnInit() {
  }

  iniciar(): void {
    if (!this.emExecucao) {
      this.interval = setInterval(() => {
        this.miliSegundos += 50;
        this.emExecucao = true;
      }, 50);
    }
  }

  parar(): void {
    if (this.emExecucao) {
      clearInterval(this.interval);
      this.emExecucao = false;
    }
  }

  limpar() {
    this.miliSegundos = 0;
  }

  segundos(): number {
    return Math.round(this.miliSegundos / 1000);
  }

}
