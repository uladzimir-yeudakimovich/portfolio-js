import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public getMessage() {
    return this.http.get("src/app/message.json");
  }

  public updateMessage(data) {
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.put("src/app/message.json", body);
  }
}