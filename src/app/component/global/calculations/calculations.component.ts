import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { CalculatorExpression } from 'src/app/model/calculator-expression';
import { SOCKET_SERVER_URL } from './../../../constants';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  title = 'Global Calculations';

  private stompClient;

  messages:CalculatorExpression[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stompClient = Stomp.over(new SockJS(SOCKET_SERVER_URL));
    this.startListening();
  }

  startListening():void {
    let componentInstance = this;
    this.stompClient.connect({}, function(frame) {
      componentInstance.stompClient.subscribe("/channel/calculations", (message:any) => {
        if(message.body) {
          if(componentInstance.messages.length == 10) componentInstance.messages.pop();
          componentInstance.messages.unshift(JSON.parse(message.body));
        }
      });
    });
  }

}
