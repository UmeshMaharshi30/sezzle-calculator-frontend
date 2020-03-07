export class CalculatorExpression {
    user_name : string;
    calculation_expression : string;

    constructor(_user_name:string, _calculation_expression:string) {
        this.user_name = _user_name;
        this.calculation_expression = _calculation_expression;
    }
}
