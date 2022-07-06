import {Component, OnInit} from '@angular/core';
import { MainService } from './main.service';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  showFiller = false;
  message: any = null;

  title: string = 'Main';

  constructor(private mainService: MainService) {
    this.mainService.onChangeTitle.subscribe((str) => (this.title = str));
  }

  ngOnInit() {
    this.requestPermission();
    this.listen();
  }
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey: environment.firebase.vapidKey}).then(
      (currenToken) => {
        if (currenToken) {
          console.log("I got the token.");
          console.log(currenToken);
        } else {
          console.log("No registration token available. Request permission to generate key.");
        }
      }).catch((err) => {
        console.error("An error occured while retrieving token.", err);
    })
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log("Message received.", payload);
      this.message = payload;
    })
  }
}
