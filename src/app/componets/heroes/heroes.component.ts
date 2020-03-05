import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services.service';
import { Heroe } from "../../modelos/heroe";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
