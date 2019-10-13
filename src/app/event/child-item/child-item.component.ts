import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss']
})
export class ChildItemComponent implements OnInit {

  @Input() titulo: string;

  @Output() somarUm = new EventEmitter<any>();
  @Output() somarDois = new EventEmitter<any>();
  @Output() subtrairUm = new EventEmitter<any>();
  @Output() subtrairDois = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  somarUmClick() { this.somarUm.emit() };
  somarDoisClick() { this.somarDois.emit(); }
  subtrairUmClick() { this.subtrairUm.emit(); }
  subtrairDoisClick() { this.subtrairDois.emit(); }

}
