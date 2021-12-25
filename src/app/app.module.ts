import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
