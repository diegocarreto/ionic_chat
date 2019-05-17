import { MessagesProvider } from './../../providers/messages/messages';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MessageModel } from '../../models/message-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;
  messages: MessageModel[];
  message: string;

  constructor(
    public navCtrl: NavController,
    private message_Provider: MessagesProvider,
    public navParams: NavParams) {

    this.user = this.navParams.data;

    console.log("usuario", this.user);

    this.loadMessages();
  }

  ionViewDidLoad() {

    setInterval(() => {

      this.loadMessages();
    }, 1000);
  }

  goAbout() {

    this.navCtrl.push(AboutPage, { user: "diego", age: 12 });
  }

  loadMessages() {

    this.message_Provider
      .getMessages()
      .subscribe((response: MessageModel[]) => {

        this.messages = response;
        console.log("mensajes", this.messages);

      }, error => {

      });
  }

  sendMessage() {

    this.message_Provider.sendMessage(this.user.id_user, this.message).subscribe(() => {
      this.message = null;
      // this.content.scrollToBottom();
    }, error => console.log(error));
  }

}
