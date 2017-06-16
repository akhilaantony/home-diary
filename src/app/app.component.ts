import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './pages/home.page';
import { FeedbackPage } from './pages/feedback.page';


@Component({
  template: `<ion-nav #myNav [root]="rootPage"></ion-nav>`
})
export class AppComponent {
  @ViewChild('myNav') nav: NavController;
  public rootPage = HomePage;


  ngOnInit() {
      // Let's navigate from TabsPage to Page1
      // this.nav.push(HomePage);
   }

}
