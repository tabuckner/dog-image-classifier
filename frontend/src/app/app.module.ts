import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ImagesComponent } from './images/images.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'images', component: ImagesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
