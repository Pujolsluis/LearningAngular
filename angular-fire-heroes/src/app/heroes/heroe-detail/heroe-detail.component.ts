import {Component, Input, OnInit} from '@angular/core';
import {Heroe} from '../shared/heroe';
import {HeroeService} from '../shared/heroe.service';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor(private heroeSvc: HeroeService, private db: AngularFireDatabase) {

    const offsetRef = firebase.database().ref('.info/serverTimeOffSet');
    let offset = 0;

    offsetRef.on('value', function (snap) {
      offset = snap.val();
    });

    if (isNullOrUndefined(this.heroe)) {
        this.heroe.timeStamp = new Date().getTime() + offset;
    }
  }

  ngOnInit() {
  }

  updateTimeStamp() {
    this.heroeSvc.updateHeroe(this.heroe.$key, { timeStamp: (firebase.database.ServerValue.TIMESTAMP)});
  }

  updateActive(value: boolean) {
    this.heroeSvc.updateHeroe(this.heroe.$key, { active: value });
  }

  deleteHeroe() {
    this.heroeSvc.deleteHeroe(this.heroe.$key);
  }


}
