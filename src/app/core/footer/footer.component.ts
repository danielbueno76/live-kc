import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  autor: string;
  empresa: string;
  constructor() {
    this.autor = '';
    this.empresa = '';
  }

  ngOnInit(): void {
    this.autor = 'Daniel Bueno';
    this.empresa = 'KeepCoding';
  }
}
