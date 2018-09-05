import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public messages = [];
  public localMessages =[];
  public model = [];
  public later = {
    name: '',
    email: '',
    message: ''
  };

  constructor(public messageService: MessageService, translate: TranslateService) {
    translate.setDefaultLang('ru');
  }
  
  ngOnInit(): void {
    this.getMessages();
    this.getLocalMessages();
  }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      for (const key in dataFromServer['mess']) {
        this.messages.push(dataFromServer['mess'][key]);
      }
    });
  }

  getLocalMessages() {
    for (const key in this.messageService.getLocalMessages()['mess']) {
      this.localMessages.push(this.messageService.getLocalMessages()['mess'][key]);
    }
    // this.messages.forEach((n) => this.model.push(n));          /*for server*/
    this.localMessages.forEach((n) => this.model.push(n));        /*for localStorage*/
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
      this.model.push(this.later);
      this.messageService.updateMessage({mess: this.model});
      this.localMessages.push(this.later);
      this.later = {
        name: '',
        email: '',
        message: ''
      };
    }
  }

}
