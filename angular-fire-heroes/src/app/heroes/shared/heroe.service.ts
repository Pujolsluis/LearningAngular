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

    // Print out the key of the heroe
    let heroeSnapshot;
    heroeSnapshot = this.db.object(heroePath, { preserveSnapshot: true });
    heroeSnapshot.subscribe(snapshot => {
      console.log(snapshot.key);
      console.log(snapshot.val());
    });

    return this.heroe;
  }

  createHeroe(heroe: Heroe): void {
    this.heroes.push(heroe)
      .catch(error => this.handleError(error));
  }

  updateHeroe(key: string, value: any): void {
    this.heroes.update(key, value)
      .catch(error => this.handleError(error));
  }

  deleteHeroe(key: string): void {
    this.heroes.remove(key)
      .catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.heroes.remove()
      .catch(error => this.handleError(error));

  }

  private handleError(error: Error) {
    console.log(error);
  }
}
