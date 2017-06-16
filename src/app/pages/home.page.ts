import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Http } from '@angular/http';
import { FeedbackPage } from './feedback.page';

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  appName = 'Home Diary';
  todo: any;
  today: any;
  numOfDays: Array<Number>;
  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public viewCtrl: ViewController,
              public appCtrl: App,
              public http: Http,
              private device: Device) {
    this.todo = {};
    this.numOfDays = new Array(30);
    this.today = new Date().toISOString();
  }

  ngOnInit() {
    let obj = {
      "deviceId": '75685687'
      // "deviceId": this.device.uuid
    }
    this.http.post('http://192.168.5.157/homeDiary/webservices?procedure=initializeApp', obj).map(res => res.json()).subscribe(data => {
    localStorage.setItem('authToken', data.authToken);
  });
    // console.log(this.device.uuid);

  }
  
  logForm() {
    console.log(this.todo);
    // localStorage.setItem('startDate', this.todo.startDate);
    let obj={
      "deviceId": '75685687',
      "authToken": localStorage.getItem('authToken'),
      "patientId":this.todo.patientId,
      "medicationDays":this.todo.numOfDays,
      "dateofMedication":this.todo.startDate
    }
    this.http.post('http://192.168.5.157/homeDiary/webservices?procedure=addPatient', obj).map(res => res.json()).subscribe(data => {
     let toast = this.toastCtrl.create({
      message: 'Registered successfully',
      duration: 3000,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'x'
    });

    toast.present();
    this.navToFeedback();
  });
   
  }

  navToFeedback() {
    // this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().push(FeedbackPage);
    // this.navCtrl.pop();
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(FeedbackPage, {
      id: "123",
      name: "Carl"
    });
  }
  

  
}
