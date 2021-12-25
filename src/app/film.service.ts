import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { GhibliFilms, GhibliFilm} from './GhibliFilms';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private ghibliFilmUrl = 'https://ghibliapi.herokuapp.com/films'

  constructor(
    private http: HttpClient,) { }

  getGhibliFilms(): Observable<GhibliFilms[]> {
    return this.http.get<GhibliFilms[]>(this.ghibliFilmUrl)
  }

  getGhibliFilm(id: string | null): Observable<GhibliFilm> {
    return this.http.get<GhibliFilm>(this.ghibliFilmUrl + "/" + id)
  }
}
