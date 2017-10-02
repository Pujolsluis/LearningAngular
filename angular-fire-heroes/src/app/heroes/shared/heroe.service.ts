import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Heroe} from './heroe';

@Injectable()
export class HeroeService {

  basePath = './heroes';

  heroes: FirebaseListObservable<Heroe[]> = null; // list of heroes
  heroe: FirebaseObjectObservable<Heroe> = null; // single heroe

  constructor(private db: AngularFireDatabase) { }

  getHeroesList(query= {}): FirebaseListObservable<Heroe[]> {
    this.db.list(this.basePath, {
      query: query
    });
    return this.heroes;
  }

  getHeroe(key: string): FirebaseObjectObservable<Heroe> {

    const heroePath =  `${this.basePath}/${key}`;
    this.heroe = this.db.object(heroePath);
    return this.heroe;
  }

}
