import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, 
  MatProgressBarModule, MatToolbarModule,
  MatProgressSpinnerModule} from '@angular/material';

const modules = [
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatProgressBarModule,
  MatToolbarModule ,
  MatProgressSpinnerModule,
  MatButtonModule
]

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    modules,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    DragDropModule, 
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule],
  exports: [modules],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
