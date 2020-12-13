import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AngularFireModule } from "@angular/fire";
import { ExcerciseCardComponent } from "./excercise-card/excercise-card.component";
import { ExcerciseCardFullComponent } from "./excercise-card-full/excercise-card-full.component";
import { FireStoreService } from "./firestore.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatChipsModule } from "@angular/material/chips";
import { ExcerciseCardLightComponent } from "./excercise-card-light/excercise-card-light.component";
import { MatCommonModule, MatInputModule } from "@angular/material";

import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from "@angular/platform-browser/animations";

const config = {
  apiKey: "AIzaSyC3WX1eC-OooBfYZJwU2AIUQe-btrt2JlA",
  authDomain: "stackblitzfire.firebaseapp.com",
  databaseURL: "https://habitato.firebaseio.com/",
  storageBucket: "stackblitzfire.appspot.com",
  projectId: "habitato",
  messagingSenderId: "42917465053"
};

@NgModule({
  imports: [
    BrowserModule,
    MatCommonModule, //?
    MatInputModule, //?
    NoopAnimationsModule, //?
    BrowserAnimationsModule,
    MatChipsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,

    ExcerciseCardComponent,
    ExcerciseCardFullComponent,
    ExcerciseCardLightComponent
  ],
  bootstrap: [AppComponent],
  exports: [MatChipsModule],
  providers: [FireStoreService, , AngularFirestore]
})
export class AppModule {}
