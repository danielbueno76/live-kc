import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { Grupo } from 'src/app/models/grupo.mode';
import { GRUPOS, SECTORES } from 'src/app/models/maestro.datos';
import { Sector } from 'src/app/models/sector.model';

@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css'],
})
export class FormVdComponent implements OnInit {
  contacto: Contacto;
  aGrupos: Array<Grupo>;
  aSectores: Array<Sector>;
  constructor() {
    this.contacto = new Contacto();
    this.aGrupos = GRUPOS;
    this.aSectores = SECTORES;
  }

  ngOnInit(): void {}
}
