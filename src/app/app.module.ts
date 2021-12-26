import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from "@angular/material/chips";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ExcerciseCardFullComponent } from './excercise-card-full/excercise-card-full.component';
import { ExcerciseCardLightComponent } from './excercise-card-light/excercise-card-light.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExcerciseCardComponent } from './excercise-card/excercise-card.component';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ExcerciseCardComponent,
    ExcerciseCardFullComponent,
    ExcerciseCardLightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    MatChipsModule,
    BrowserAnimationsModule,
    MatCommonModule, //?
    
    NoopAnimationsModule //?
  ],
  providers: [],
  exports: [MatChipsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
