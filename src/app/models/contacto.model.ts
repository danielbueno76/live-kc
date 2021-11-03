import { Grupo } from './grupo.mode';
import { Sector } from './sector.model';

export class Contacto {
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  grupo!: Grupo;
  sector!: Sector;
  aficiones: Array<any>;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.phoneNumber = '';
    this.aficiones = [];
  }
}
