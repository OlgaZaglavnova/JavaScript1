'use strict'
/*
2 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function checkNumber (num){
    if (num < 0 || num >999) {
        console.log("Введено число вне указанного диапазона от 0 до 999");
        return false;
    } else if(!Number.isInteger(num)){
        console.log("Введено не целое число");
        return false;
    }else if(isNaN(num)){
        console.log("Введено не число");
        return false;
    }
    return true;
}
function number2object(num){
    let numobj = {};
    if (checkNumber(num)){
        numobj.hundreds = parseInt(num / 100);
        num = num % 100;
        numobj.tens = parseInt(num / 10);
        numobj.units = num % 10;
    };
    return numobj;
}

let numberTaken = Number(prompt("Введите число от 0 до 999"));
console.log(number2object(numberTaken));