import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MbooksService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Introduction to Angular',
      'Angular 12',
      'Angular Advanced',
    ];
  }

  getLibros(clave: string) {
    return this.aLibros;
  }

  getLibros$(clave: string) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.aLibros);
      }, 2000);
    });
  }
}
