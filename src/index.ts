//Создать 4 функции: `add`, `subtract`, `multiply`, `divide`. Каждая принимает два `number` и возвращает `number`.
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b == 0){
        throw new Error("Division by zero");
    }
    return a / b;
}

//Создать интерфейс `Operation` с полями: `name: string`, `symbol: string`, `operate: (a: number, b: number) => number`.

interface Operation {
    name: string,
    symbol: string,
    operate: (a: number, b: number) => number
}

//Сделать массив `Operation[]` с минимум 4 операциями (+, −, *, /)

const operations: Operation[] = [
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
]
//Написать функцию `calculate(opSymbol: string, a: number, b: number): number`, которая находит операцию по символу и выполняет её.
// Если операция не найдена – вывести `"Unknown operation"` и вернуть `NaN`.

function calculate(opSymbol: string, a: number, b: number): number {
    const operation = operations.find(function (op) {
        return op.symbol === opSymbol;
    });
    if (operation) {
        return operation.operate(a, b);
    } else {
        console.log("Unknown operation");
        return NaN;
    }
}

//test
console.log("5 + 10 =", calculate("+",5,10));
console.log("20 - 7 =", calculate("-",20,7));
console.log("6 * 8 =", calculate("*",6,8));
console.log("50 / 5 =",calculate("/",50,5));
console.log("5 ^ 2 =", calculate("^",5,2));

//Сделать ввод через `prompt(...)` или `readline-sync`,
// чтобы пользователь вводил что-то вроде `5 * 10`, а программа выводила результат в консоль.

const { PassThrough, Writable } = require('node:stream');
const pass = new PassThrough();
const writable = new Writable();

pass.pipe(writable);
pass.unpipe(writable);
// readableFlowing is now false.

pass.on('data', (chunk: Buffer) => { console.log(chunk.toString()); });
// readableFlowing is still false.
pass.write('ok');  // Will not emit 'data'.
pass.resume();     // Must be called to make stream emit 'data'.
// readableFlowing is now true.

import {stdin, stdout} from 'node:process';

stdin.on("data",(chunk:Buffer):void => {
    const input: string = chunk.toString().trim();
    const parts: string[] = input.split(" ");

    const a = +parts[0];
    const oper = parts[1];
    const b = +parts[2];

    console.log("Result:" + calculate(oper,a,b));
    process.exit()
});

