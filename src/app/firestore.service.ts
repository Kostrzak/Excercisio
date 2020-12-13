import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class FireStoreService {
  private afsGlobal: AngularFirestore;

  constructor(private db: AngularFirestore) {
    this.afsGlobal = db;
  }

  public getAllExcercises() {
    return this.afsGlobal.collection("/Excercises");
  }

  public addExcercise(name: string) {
    this.afsGlobal
      .collection("/Excercises")
      .doc("Pullup")
      .set({
        name: "Pullup",
        priority: 9
      });
  }
}
