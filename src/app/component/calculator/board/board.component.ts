import { Component, OnInit } from '@angular/core';
import { CalculatorButton } from 'src/app/model/calculator-button';
import { CALCULATOR_ROWS } from '../../../constants/';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  expression : string = "";
  all_rows : Array<CalculatorButton[]>;

  constructor() { }

  ngOnInit(): void {
      this.all_rows = CALCULATOR_ROWS;
  }

  updateExpression(_expression_val : string):void {
    this.expression = _expression_val;
  }

  sendMessage(){ 
    
  }

}
