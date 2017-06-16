import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
// import { DatePicker } from '@ionic-native/date-picker';
@Component({
  templateUrl: 'feedback.page.html',
  styleUrls: ['feedback.page.scss']
})
export class FeedbackPage {

  appName = 'Home Diary';
  todo: any;
  answers: Array<any>;
  today: any;
  questions: any;
  numOfDays: Array<Number>;
  constructor(private navController: NavController, public toastCtrl: ToastController, public http: Http) {
    this.todo = {};
    this.answers = [];
    this.numOfDays = new Array(30);
    this.today = new Date().toISOString();
  }

  ngOnInit() {
    this.http.get('src/api/form_day_1.json').map(res => res.json()).subscribe(data => {
        this.questions = data.questions;
        // let n = data.questions.length;
       
    });
  }
  
  submitForm() {
    console.log(this.answers);
   
    // let toast = this.toastCtrl.create({
    //   message: 'Submitted successfully',
    //   duration: 3000,
    //   showCloseButton: true,
    //   position: 'bottom',
    //   closeButtonText: 'x'
    // });
    // toast.present();
  }
  
}
