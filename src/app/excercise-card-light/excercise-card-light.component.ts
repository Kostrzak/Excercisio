import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
//import { FireStoreService } from "../firestore.service";
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import {MatChipsModule} from '@angular/material/chips';

export interface ChipColor {
  name: string;
  color: ThemePalette;
  color2?: any;
}

export interface Excercise {
  priority: number;
  name: string;
  mainMuscle: string;
}

@Component({
  selector: "excercise-card-light",
  templateUrl: "./excercise-card-light.component.html"
})
export class ExcerciseCardLightComponent implements OnInit {
  exc: any;
  availableColors: ChipColor[] = [
    { name: "none", color: "primary", color2: "green" },
    { name: "Primary", color: "primary" },
    { name: "Accent", color: "accent" },
    { name: "Warn", color: "warn" }
  ];

  drills$: Observable<any[]>;

  constructor(firestore: Firestore) {    
      const collectio = collection(firestore, 'Excercises');
      this.drills$ = collectionData(collectio);
      const notesRef = collection(firestore, 'Excercises');
      const excer: Excercise = {
        mainMuscle: 'Back',
        name: 'Horizontal Row',
        priority: 7
    };
     //  addDoc(notesRef, excer );
       const noteDocRef = doc(firestore, `Excercises/HorizontalRow`);
        setDoc(noteDocRef, excer);
  
  }
  ngOnInit() {}

  

}
