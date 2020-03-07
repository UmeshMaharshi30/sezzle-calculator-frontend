import { Component, OnInit } from '@angular/core';
import { CalculatorButton } from 'src/app/model/calculator-button';
import { CALCULATOR_ROWS } from '../../../constants/';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { CalculatorExpression } from 'src/app/model/calculator-expression';
import { SOCKET_SERVER_URL } from './../../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  expression : string = "";
  all_rows : Array<CalculatorButton[]>;
  private stompClient : Stomp;
  private currUser : string;


  constructor(private router: Router) {
      this.currUser = localStorage.getItem('user');
      if(!this.currUser) this.router.navigate(['registration']);
   }

  ngOnInit(): void {
      this.all_rows = CALCULATOR_ROWS;
      this.stompClient = Stomp.over(new SockJS(SOCKET_SERVER_URL));
  }

  updateExpression(_expression_val : string):void {
    this.expression = _expression_val;
  }

  sendExpression(){ 
    if(!this.expression.includes("=")) return;
    let cal_expression : CalculatorExpression = new CalculatorExpression(this.currUser, this.expression);
    this.stompClient.send("/global/calculation" , {}, JSON.stringify(cal_expression));
    this.expression = '';
  }


  disconnect() {
    if(this.stompClient != null) {
      this.stompClient.disconnect();
      localStorage.removeItem('user');
      this.router.navigate(['registration']);
    }
  }
}
