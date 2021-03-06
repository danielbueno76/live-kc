import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  usuario: string;
  idioma: string;
  constructor() {
    this.usuario = '';
    this.idioma = '';
  }

  ngOnInit(): void {
    this.usuario = 'Daniel';
    this.idioma = 'es';
  }

  btnBorrar(ev: any) {
    this.usuario = '';
  }
}
