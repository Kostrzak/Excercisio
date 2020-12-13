import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ExcerciseCardComponent } from "./excercise-card/excercise-card.component";
import { ExcerciseCardFullComponent } from "./excercise-card-full/excercise-card-full.component";
import { FirestoreService } from './firestore.service';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ExcerciseCardComponent,
    ExcerciseCardFullComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirestoreService]
})
export class AppModule {}
