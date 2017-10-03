import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Heroe} from './heroe';
import * as firebase from 'firebase';
import {FirebaseApp} from 'angularfire2'

@Injectable()
export class HeroeService {

  basePath = '/heroes';

  heroes: FirebaseListObservable<Heroe[]>; // list of heroes
  heroe: FirebaseObjectObservable<Heroe> ; // single heroe

  constructor(private db: AngularFireDatabase, private firebaseApp: FirebaseApp) {
  }

  getHeroesList(query= {}): FirebaseListObservable<Heroe[]> {
    this.heroes = this.db.list(this.basePath);
    return this.heroes;
  }

  getHeroe(key: string): FirebaseObjectObservable<Heroe> {

    const heroePath = `${this.basePath}/${key}`;
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
    let  key: string;
    key = this.db.database.ref(this.basePath).push().key;
    heroe.key = key;
    console.log(key); // log key to console
    console.log(heroe); // log current hero data before pushing to firebase
    heroe.timeStamp = firebase.database.ServerValue.TIMESTAMP;
    console.log(heroe.timeStamp);
    this.heroes.update( key, heroe)
      .catch(error => this.handleError(error));
  }

  updateHeroe(key: string, value: any): void {
    console.log(key);
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
