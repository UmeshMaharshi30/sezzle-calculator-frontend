import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CalculatorButton } from './../../../model/calculator-button';
import { BUTTON_TYPES } from '../../../constants/';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() cal_button : CalculatorButton;
  @Input() expression : string;
  
  @Output() propagateUpdate: EventEmitter<string > = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  fetchClasses():any  {
    let classes = {
      btn : true,
      'cal-btn' : true, 
      'btn-secondary' : this.cal_button.type== BUTTON_TYPES.OPERATOR || this.cal_button.type== BUTTON_TYPES.DELETE,
      'btn-light' : this.cal_button.type== BUTTON_TYPES.NUMBER,
      'btn-primary': this.cal_button.type== BUTTON_TYPES.SUBMIT,
    }
    return classes;
  }

  updateExpression(input_var : string):void {
    if(!this.expression || this.expression.includes("Invalid")) this.expression = "";
    let equalsIndex: number = this.expression.indexOf("=");
    let containsEquals: boolean = equalsIndex > -1;
    let button_type = this.cal_button.type;
    if(button_type == BUTTON_TYPES.DELETE) {
        if(containsEquals) {
          this.expression = this.expression.substr(0, this.expression.indexOf("=") - 1);
        } else this.expression = this.expression.substring(0, this.expression.length - 1);
    } else if(button_type == BUTTON_TYPES.NUMBER || button_type == BUTTON_TYPES.OPERATOR) {
        if(containsEquals) return;
        this.expression = this.expression.concat(this.cal_button.value);  
    } else if(button_type == BUTTON_TYPES.SUBMIT && this.expression && !containsEquals) {
      try {
        let output_value = eval(this.expression);
        this.expression = this.expression + " = " + output_value;
      } catch(err) {
        this.expression = "Invalid !";
      }
    }
    this.propagateUpdate.emit(this.expression);
  }

}
