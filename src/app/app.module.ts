import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home.page';
import { FeedbackPage } from './pages/feedback.page';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent)
  ],
  declarations: [
    AppComponent,
    HomePage,
    FeedbackPage
  ],
  entryComponents: [
    AppComponent,
    HomePage,
    FeedbackPage    
  ],
  bootstrap: [IonicApp],
  providers: [Device]
})
export class AppModule { }
