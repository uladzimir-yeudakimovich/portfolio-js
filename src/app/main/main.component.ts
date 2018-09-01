import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: any[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => { 
      for (const key in data) {
        this.data.push(data[key]);
      }
    });
  }
}
