import { Component, OnInit,Input } from '@angular/core';
import {AppComponent, ExcerciseReadCard } from '../app.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrls: ['./excercise-card.component.css']
})
export class ExcerciseCardComponent implements OnInit {

  @Input() excercise : ExcerciseReadCard ;
sanitizer: DomSanitizer
  constructor(sanitizer: DomSanitizer) { 
    this.excercise = {}
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
  }

}