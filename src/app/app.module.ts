import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component'; 

import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireStorageModule } from '@angular/fire/storage';

import {environment } from '../environments/environment';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    AppComponent], 
  entryComponents: [],
  imports: [
    FormsModule , 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
   
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
