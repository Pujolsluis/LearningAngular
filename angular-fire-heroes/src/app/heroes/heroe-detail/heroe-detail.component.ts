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

  constructor(heroeSvc: HeroeService) { }

  ngOnInit() {
  }

}
