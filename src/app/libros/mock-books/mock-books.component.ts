import { Component, OnInit } from '@angular/core';
import { MbooksService } from 'src/app/services/mbooks.service';

@Component({
  selector: 'kc-mock-books',
  templateUrl: './mock-books.component.html',
  styleUrls: ['./mock-books.component.css'],
})
export class MockBooksComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;

  constructor(public mbooks: MbooksService) {
    this.clave = '';
    this.aLibros = [];
  }

  ngOnInit(): void {}

  btnBuscar() {
    this.aLibros = this.mbooks.getLibros(this.clave);
  }

  btnBuscarRx() {
    this.mbooks.getLibros$(this.clave).subscribe((response: any) => {
      this.aLibros = response;
    });
  }
}
