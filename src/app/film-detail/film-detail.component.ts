import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GhibliFilms} from '../GhibliFilms';
import { HeroService } from '../film.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: [ './film-detail.component.css' ]
})
export class FilmDetailComponent implements OnInit {
  film: GhibliFilms | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
   this.getGhibli()
  }

  getGhibli(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getGhibliFilm(id)
      .subscribe(film => this.film = film);
  }

  goBack(): void {
    this.location.back();
  }
}
