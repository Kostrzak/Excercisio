import { Component, OnInit } from "@angular/core";
//import { FireStoreService } from "../firestore.service";

@Component({
  selector: "excercise-card-full",
  templateUrl: "./excercise-card-full.component.html",
  styleUrls: ["./excercise-card-full.component.css"]
})
export class ExcerciseCardFullComponent implements OnInit {
  drills: any;
  constructor() {
  //  this.drills = fs.getAllExcercises().valueChanges();
  }
  ngOnInit() {}
}
