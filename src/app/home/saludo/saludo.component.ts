import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  usuario: string;
  constructor() {
    this.usuario = '';
  }

  ngOnInit(): void {
    this.usuario = 'Daniel';
  }

  btnBorrar(ev: any) {
    this.usuario = '';
  }
}
