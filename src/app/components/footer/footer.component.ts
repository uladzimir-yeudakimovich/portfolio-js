import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public messages = [];

  constructor(public messageService: MessageService) {}

  public later = {
    name: '',
    email: '',
    message: ''
  }

  private model = [];

  ngOnInit() {
    this.messageService.getMessage().subscribe(dataFromServer => {
      for (const key in dataFromServer['mess']) {
        this.messages.push(dataFromServer['mess'][key]);
      }
    });
  }

  addMessage() {
    this.model = [];
    this.messages.forEach((n) => this.model.push(n));
    this.model.push(this.later);
    this.messageService.updateMessage({mess: this.model});
  }

}
