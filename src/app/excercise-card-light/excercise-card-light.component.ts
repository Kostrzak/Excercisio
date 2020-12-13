import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { FireStoreService } from "../firestore.service";

export interface ChipColor {
  name: string;
  color: ThemePalette;
  color2?: any;
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

  drills$: any;
  constructor(fs: FireStoreService) {
    this.drills$ = fs.getAllExcercises().valueChanges();
  }
  ngOnInit() {}
}
