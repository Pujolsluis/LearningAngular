import { Component, OnInit } from '@angular/core';
import {Heroe} from '../shared/heroe';
import {HeroeService} from '../shared/heroe.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.css']
})
export class HeroesFormComponent implements OnInit {

  heroes: FirebaseListObservable<Heroe[]>;
  heroe: Heroe = new Heroe();

  constructor(private heroeSvc: HeroeService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.heroes = this.heroeSvc.getHeroesList();
  }

  createHeroe() {
    this.heroeSvc.createHeroe(this.heroe);
    this.heroe = new Heroe();
    console.log('dead?');
  }

}
