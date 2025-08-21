"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Создать 4 функции: `add`, `subtract`, `multiply`, `divide`. Каждая принимает два `number` и возвращает `number`.
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    //todo if b==0 => Error!
    return a / b;
}
//Сделать массив `Operation[]` с минимум 4 операциями (+, −, *, /)
var operations = [
    {
        name: "Add",
        symbol: "+",
        operate: add
    },
    {
        name: "Subtract",
        symbol: "-",
        operate: subtract
    },
    {
        name: "Multiply",
        symbol: "*",
        operate: multiply
    },
    {
        name: "Divide",
        symbol: "/",
        operate: divide
    }
];
//Написать функцию `calculate(opSymbol: string, a: number, b: number): number`, которая находит операцию по символу и выполняет её.
// Если операция не найдена – вывести `"Unknown operation"` и вернуть `NaN`.
function calculate(opSymbol, a, b) {
    //todo зробити через switch
    var operation = operations.find(function (op) {
        return op.symbol === opSymbol;
    });
    if (operation) {
        return operation.operate(a, b);
    }
    else {
        console.log("Unknown operation");
        return NaN;
    }
}
//test
console.log("5 + 10 =", calculate("+", 5, 10));
console.log("20 - 7 =", calculate("-", 20, 7));
console.log("6 * 8 =", calculate("*", 6, 8));
console.log("50 / 5 =", calculate("/", 50, 5));
console.log("5 ^ 2 =", calculate("^", 5, 2));
var _a = require('node:stream'), PassThrough = _a.PassThrough, Writable = _a.Writable;
var pass = new PassThrough();
var writable = new Writable();
pass.pipe(writable);
pass.unpipe(writable);
// readableFlowing is now false.
pass.on('data', function (chunk) { console.log(chunk.toString()); });
// readableFlowing is still false.
pass.write('ok'); // Will not emit 'data'.
pass.resume(); // Must be called to make stream emit 'data'.
// readableFlowing is now true.
var node_process_1 = require("node:process");
node_process_1.stdin.on("data", function (chunk) {
    var input = chunk.toString().trim();
    var parts = input.split(" ");
    var a = +parts[0];
    var oper = parts[1];
    var b = +parts[2];
    console.log("Result:" + calculate(oper, a, b));
    process.exit();
});
