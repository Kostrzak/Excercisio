import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExcercisioTotalNew';
  exc: ExcerciseReadCard = {
    //imgSrc: "https://i.imgur.com/eWhTVg4.png",
    imgSrc: "https://i.ytimg.com/vi/i6wTUg_tA-A/maxresdefault.jpg",
    name: "Face Pullss"
  };
 // item$: Observable<Item[]>;
  itemki$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const collectio = collection(firestore, 'Excercises');
    this.itemki$ = collectionData(collectio);
 //   this.itemki$ = collection(firestore,'Excercises');
  }
}

export class ExcerciseReadCard {
  name?: string;
  imgSrc?: string;
  tags?: Tag[];
  constructor() {
    this.tags = [];
  }
}

export class Tag {
  name?: string;
}
