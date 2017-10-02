import { Component, OnInit } from '@angular/core';
import {Heroe} from '../shared/heroe';
import {HeroeService} from '../shared/heroe.service';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.css']
})
export class HeroesFormComponent implements OnInit {

  heroe: Heroe = new Heroe();

  constructor(private heroeSvc: HeroeService) { }

  ngOnInit() {
  }

  createHeroe() {
    this.heroeSvc.createHeroe(this.heroe);
    this.heroe = new Heroe();
  }

}
