import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public getMessages() {
    return this.http.get("assets/message.json");
  }

  public updateMessage(messages) {
    let body = JSON.stringify(messages);
    // return this.http.put("assets/message.json", body);       /*for server*/
    return localStorage.setItem("messages", body);              /*for localStorage*/
  }

  public getLocalMessages() {
    return JSON.parse(localStorage.getItem("messages"));
  }
}