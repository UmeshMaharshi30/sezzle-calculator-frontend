import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  title = 'Global Calculations';

  private stompClient;
  private serverUrl = 'http://localhost:8080/gs-guide-websocket'

  messages = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    
  }

}
