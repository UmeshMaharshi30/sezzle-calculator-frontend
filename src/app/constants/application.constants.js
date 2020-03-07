export const BUTTON_TYPES = {
    OPERATOR : 2,
    SUBMIT : 0,
    NUMBER : 1,
    DELETE: -1
}


export const CALCULATOR_ROWS = [[{type : 2, value : "("},
{type : 2, value : ")"},
{type : 2, value : "%"},
{type : -1, value : "Del"}],
[{type : 1, value : "7"},
{type : 1, value : "8"},
{type : 1, value : "9"},
{type : 2, value : "/"}],
[{type : 1, value : "4"},
{type : 1, value : "5"},
{type : 1, value : "6"},
{type : 2, value : "*"}],
[{type : 1, value : "1"},
{type : 1, value : "1"},
{type : 1, value : "3"},
{type : 2, value : "-"}],
[{type : 1, value : "0"},
{type : 1, value : "."},
{type : 0, value : "="},
{type : 2, value : "+"}]
];


export const SOCKET_SERVER_URL = 'http://localhost:8080/sezzle-websocket'