import { Component, OnInit } from '@angular/core';

import { GhibliFilms} from '../GhibliFilms';
import { HeroService } from '../film.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: GhibliFilms[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
   this.getGhibliFilm();
  }

  getGhibliFilm(): void {
    this.heroService.getGhibliFilms()
    .subscribe(films => this.films = films.sort((b, a) =>parseInt(a.rt_score) - parseInt(b.rt_score)));
  }
}
