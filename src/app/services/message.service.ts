import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public getMessage() {
    return this.http.get("src/app/message.json");
  }

  public updateMessage(messages) {
    let body = JSON.stringify(messages);
    console.log(body);
    return this.http.put("src/app/message.json", body).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }
}