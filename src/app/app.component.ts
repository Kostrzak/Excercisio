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
 // item$: Observable<Item[]>;
  itemki$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const collectio = collection(firestore, 'Excercises');
    this.itemki$ = collectionData(collectio);
 //   this.itemki$ = collection(firestore,'Excercises');
  }
}
