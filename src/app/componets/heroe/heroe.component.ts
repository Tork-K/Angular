import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.services.service";
import { Heroe } from "../../modelos/heroe";

@Component({
  selector: 'app-heore',
  templateUrl: './heore.component.html',
  styleUrls: ['./heore.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activateRouter: ActivatedRoute, private heroeServices: HeroesService) {
    this.activateRouter.params.subscribe(params => {
      this.heroe = this.heroeServices.getHeroe(params['id']);
    })
  }

  ngOnInit() {
  }

}
