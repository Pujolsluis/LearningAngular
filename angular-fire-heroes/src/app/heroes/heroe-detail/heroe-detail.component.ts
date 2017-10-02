import {Component, Input, OnInit} from '@angular/core';
import {Heroe} from '../shared/heroe';
import {HeroeService} from '../shared/heroe.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor(private heroeSvc: HeroeService) { }

  ngOnInit() {
  }

  updateTimeStamp() {
    const date = new Date().getTime();
    this.heroeSvc.updateHeroe(this.heroe.$key, { timeStamp: date });
  }

  updateActive(value: boolean) {
    this.heroeSvc.updateHeroe(this.heroe.$key, { active: value });
  }

  deleteHeroe() {
    this.heroeSvc.deleteHeroe(this.heroe.$key);
  }


}
