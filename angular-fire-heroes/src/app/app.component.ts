import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Post} from '../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Fire Heroes';
  items: FirebaseListObservable<any[]>;
  itemKey: string;
  itemObject: FirebaseObjectObservable<Post>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('motivational_post');
    this.itemKey = this.items[0];
    this.itemObject = db.object('motivational_post/-Kv3mgtpf_oNSwSV8paG');
  }
}
