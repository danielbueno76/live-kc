import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ControlTareasComponent } from './control-tareas/control-tareas.component';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TareasComponent,
    ControlTareasComponent,
    ItemComponent,
    ListaComponent,
  ],
  imports: [CommonModule, TareasRoutingModule, FormsModule],
})
export class TareasModule {}
