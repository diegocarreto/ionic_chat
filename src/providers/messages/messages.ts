import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageModel } from '../../models/message-model';

/*
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessagesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MessagesProvider Provider');
  }

  getMessages() : Observable<MessageModel[]> {

    return this.http.get<MessageModel[]>('http://a227fbe2.ngrok.io/api/messages' );
  }

  sendMessage(idUser,message) {
    return this.http.post( 'http://a227fbe2.ngrok.io/api/messages',{ idUser,message } );
  }
}
