import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { FormsModule } from '@angular/forms';
import { MbooksService } from './services/mbooks.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AboutModule,
  ],
  providers: [MbooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
