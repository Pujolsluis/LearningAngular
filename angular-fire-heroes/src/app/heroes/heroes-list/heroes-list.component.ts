import { Component, OnInit } from '@angular/core';
import {HeroeService} from '../shared/heroe.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {Heroe} from '../shared/heroe';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  public heroes: FirebaseListObservable<Heroe[]>;

  constructor(private heroeSvc: HeroeService) { }

  ngOnInit() {
    this.heroes = this.heroeSvc.getHeroesList({limitToLast: 5});
  }

  deleteHeroes() {
    this.heroeSvc.deleteAll();
  }

}
