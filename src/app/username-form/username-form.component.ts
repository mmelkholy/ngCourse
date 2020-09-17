import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  constructor() { }

  username: string = null;

  onUsernameSubmit(): void {
    this.username = null;
  }

  ngOnInit(): void {
  }

}
