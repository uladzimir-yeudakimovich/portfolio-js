import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public messages = [];
  public model = [];
  public later = {
    name: '',
    email: '',
    message: ''
  }

  constructor(public messageService: MessageService) {}
  
  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      for (const key in dataFromServer['mess']) {
        this.messages.push(dataFromServer['mess'][key]);
      }
    });
  }

  setMessage() {
    if (this.later.name === '') {
      document.getElementById('laterName').style.border = 'solid red';
    } else {document.getElementById('laterName').style.border = '';}
    if (this.later.email === '') {
      document.getElementById('laterEmail').style.border = 'solid red';
    } else {document.getElementById('laterEmail').style.border = '';}
    if (this.later.message === '') {
      document.getElementById('laterMessage').style.border = 'solid red';
    } else {
      document.getElementById('laterMessage').style.border = '';
    }
    if (this.later.name !== '' && this.later.email !== '' && this.later.message !== '') {
      this.model = [];
      this.messages.forEach((n) => this.model.push(n));
      this.model.push(this.later);
      this.messageService.updateMessage({mess: this.model});
      this.later = {
        name: '',
        email: '',
        message: ''
      }
    }
  }

}
