import { Component, OnInit,Input } from '@angular/core';
import {AppComponent, ExcerciseReadCard } from '../app.component';

@Component({
  selector: 'excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrls: ['./excercise-card.component.css']
})
export class ExcerciseCardComponent implements OnInit {

  @Input() excercise : ExcerciseReadCard;

  constructor() { }

  ngOnInit() {
  }

}