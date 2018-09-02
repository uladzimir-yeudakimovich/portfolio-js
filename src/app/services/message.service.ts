import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public getMessages() {
    return this.http.get("src/app/message.json");
  }

  public updateMessage(messages) {
    let body = JSON.stringify(messages);
    console.log(body);
    return this.http.put("src/app/message.json", body);
  }
}