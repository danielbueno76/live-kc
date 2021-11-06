import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibrosComponent, MockBooksComponent],
  imports: [CommonModule, LibrosRoutingModule, FormsModule],
})
export class LibrosModule {}
