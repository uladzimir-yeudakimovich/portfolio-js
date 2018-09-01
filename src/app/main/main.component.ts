import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().forEach((el) => this.data.push(el));
  }
}
