import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { FormsModule } from '@angular/forms';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { GoogleByServiceComponent } from './google-by-service/google-by-service.component';
import { MbooksService } from '../services/mbooks.service';
import { GbooksService } from '../services/gbooks.service';

@NgModule({
  declarations: [
    LibrosComponent,
    MockBooksComponent,
    GoogleBooksComponent,
    GoogleByServiceComponent,
  ],
  imports: [CommonModule, LibrosRoutingModule, FormsModule],
  providers: [MbooksService, GbooksService],
})
export class LibrosModule {}
