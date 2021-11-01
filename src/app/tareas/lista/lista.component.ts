import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() aItems: any;
  @Output() evtBorrar: EventEmitter<number>;
  constructor() {
    this.evtBorrar = new EventEmitter();
  }

  ngOnInit(): void {}

  btnBorrar(i: number) {
    this.evtBorrar.emit(i);
  }
}
