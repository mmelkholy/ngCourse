import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details = 'Secret Password = Tuna';
  displayIt = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(): void {
    this.displayIt = !this.displayIt;
    this.log.push({time: new Date(), index: this.log.length});
  }
}
