import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-control-tareas',
  templateUrl: './control-tareas.component.html',
  styleUrls: ['./control-tareas.component.css'],
})
export class ControlTareasComponent implements OnInit {
  aTareas: Array<string>;
  constructor() {
    this.aTareas = [];
  }

  ngOnInit(): void {
    this.aTareas = [];
  }

  addTareas(tarea: any) {
    this.aTareas.push(tarea);
  }
}
