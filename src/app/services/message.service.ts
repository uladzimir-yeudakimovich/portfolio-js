import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public getMessages() {
    return this.http.get("assets/message.json");
  }

  public updateMessage(messages) {
    let body = JSON.stringify(messages);
    console.log(body);
    return this.http.put("assets/message.json", body);
  }
}