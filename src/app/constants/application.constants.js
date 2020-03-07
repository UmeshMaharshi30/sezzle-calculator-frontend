export const BUTTON_TYPES = {
    OPERATOR : 'OPERATOR',
    SUBMIT : 'SUBMIT',
    NUMBER : 'NUMBER',
    DELETE: 'DELETE'
}


export const CALCULATOR_ROWS = [[{inp_type : 2, value : "("},
{inp_type : 2, value : ")"},
{inp_type : 2, value : "%"},
{inp_type : -1, value : "Del"}],
[{inp_type : 1, value : "7"},
{inp_type : 1, value : "8"},
{inp_type : 1, value : "9"},
{inp_type : 2, value : "/"}],
[{inp_type : 1, value : "4"},
{inp_type : 1, value : "5"},
{inp_type : 1, value : "6"},
{inp_type : 2, value : "*"}],
[{inp_type : 1, value : "1"},
{inp_type : 1, value : "1"},
{inp_type : 1, value : "3"},
{inp_type : 2, value : "-"}],
[{inp_type : 1, value : "0"},
{inp_type : 1, value : "."},
{inp_type : 0, value : "="},
{inp_type : 2, value : "+"}]
];
