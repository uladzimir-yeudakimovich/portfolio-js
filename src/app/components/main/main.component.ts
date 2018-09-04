import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data = [];

  constructor(public dataService: DataService, translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  ngOnInit() {
    this.dataService.getData().subscribe(dataFromServer => { 
      for (const key in dataFromServer['main']) {
        this.data.push(dataFromServer['main'][key]);
      }
    });
  }
}