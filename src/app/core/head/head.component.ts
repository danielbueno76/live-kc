import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  public title: string;
  public logo: string;
  constructor() {
    this.title = '';
    this.logo = '';
  }

  ngOnInit(): void {
    this.title = 'Angular';
    this.logo = '../../../assets/angular.jpg';
  }
}
