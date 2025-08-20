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
